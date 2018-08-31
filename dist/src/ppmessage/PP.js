var PPMessage = /** @class */ (function () {
    function PPMessage() {
    }
    Object.defineProperty(PPMessage, "initialized", {
        get: function () {
            return typeof window["PP"] != "undefined";
        },
        enumerable: true,
        configurable: true
    });
    PPMessage.ready = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var loop = function (ms) {
                if (PPMessage.initialized) {
                    _this.PP = window['PP'];
                    resolve(PPMessage);
                }
                else {
                    setTimeout(function () { return loop(ms); }, ms);
                }
            };
            loop(100);
        });
    };
    PPMessage.update = function (conf) {
        var _this = this;
        this.ready().then(function () {
            Object.keys(conf).forEach(function (key) { return window['ppSettings'][key] = conf[key]; });
            _this.PP.update();
        });
    };
    PPMessage.onShow = function () {
        var _this = this;
        return this.ready()
            .then(function () { return new Promise(function (ex) { return _this.PP.onShow(function () { return ex(); }); }); });
    };
    PPMessage.show = function () {
        var _this = this;
        this.ready().then(function () {
            if (!_this.PP.isOpen()) {
                _this.PP.show();
            }
        });
    };
    PPMessage.PP = null;
    return PPMessage;
}());
export { PPMessage };
//# sourceMappingURL=PP.js.map