import { Inject, InjectionToken, NgModule } from "@angular/core";
import { PpMessageComponent } from "./pp-message";
import { CommonModule } from "@angular/common";
export var PP_URL = new InjectionToken("qiyu_key");
export var ppurl;
var PpMessageModule = /** @class */ (function () {
    function PpMessageModule(url) {
        ppurl = url;
    }
    PpMessageModule.forRoot = function (url) {
        if (url === void 0) { url = null; }
        return {
            ngModule: PpMessageModule,
            providers: [{ provide: PP_URL, useValue: url }]
        };
    };
    PpMessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PpMessageComponent],
                    imports: [CommonModule],
                    exports: [PpMessageComponent]
                },] },
    ];
    /** @nocollapse */
    PpMessageModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PP_URL,] },] },
    ]; };
    return PpMessageModule;
}());
export { PpMessageModule };
//# sourceMappingURL=pp-message.module.js.map