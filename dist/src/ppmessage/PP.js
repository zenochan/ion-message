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
        this.ready().then(function () {
            Object.keys(conf).forEach(function (key) { return window['ppSettings'][key] = conf[key]; });
        });
    };
    PPMessage.onShow = function () {
        var _this = this;
        return this.ready()
            .then(function () { return new Promise(function (ex) { return _this.PP.onShow(function () { return ex(); }); }); });
    };
    PPMessage.show = function () {
        var _this = this;
        this.update({
            ent_user_id: "234234",
            ent_user_name: "Zeno",
            ent_user_icon: "",
            ent_user_mobile: "18888888888"
        });
        this.ready().then(function () {
            if (!_this.PP.isOpen()) {
                // let inter = setInterval(() => {
                // let inter = setInterval(() => {
                _this.PP.show();
                //   if (this.PP.isOpen()) clearInterval(inter)
                // }, 1000)
            }
        });
    };
    PPMessage.PP = null;
    return PPMessage;
}());
export { PPMessage };
//# sourceMappingURL=PP.js.map