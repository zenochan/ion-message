import { Inject, InjectionToken, NgModule } from "@angular/core";
import { PPMessage } from "./PP";
export var PP_ID = new InjectionToken("qiyu_key");
export var ppurl;
var PpMessageModule = /** @class */ (function () {
    function PpMessageModule(ppid) {
        window['ppSettings'] = {
            app_uuid: ppid,
            view: { launcher_is_show: false }
        };
        var script = document.createElement("script");
        script.src = "https://ppmessage.cn/ppcom/assets/pp-library.min.js";
        document.head.appendChild(script);
        PPMessage.ready().then(function () { return console.log("PP Message initialized"); });
    }
    PpMessageModule.forRoot = function (appid) {
        return {
            ngModule: PpMessageModule,
            providers: [{ provide: PP_ID, useValue: appid }]
        };
    };
    PpMessageModule.decorators = [
        { type: NgModule },
    ];
    /** @nocollapse */
    PpMessageModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PP_ID,] },] },
    ]; };
    return PpMessageModule;
}());
export { PpMessageModule };
//# sourceMappingURL=pp-message.module.js.map