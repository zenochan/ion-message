import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ppurl } from "./pp-message.module";
/**
 * Generated class for the PpMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PpMessageComponent = /** @class */ (function () {
    function PpMessageComponent(san) {
        this.san = san;
        this._src = null;
        this.text = 'Hello World';
        window.ppSettings = {
            app_uuid: '41d61548-ac30-11e8-8847-00163e0c79f6',
            ent_user_id: "234",
            ent_user_name: "haah",
            ent_user_icon: "",
            ent_user_mobile: "18888888888",
        };
        if (ppurl) {
            this._src = san.bypassSecurityTrustResourceUrl(ppurl);
        }
    }
    Object.defineProperty(PpMessageComponent.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            if (value) {
                this._src = this.san.bypassSecurityTrustResourceUrl(value);
            }
            else {
                this._src = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    PpMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pp-message',
                    styles: ["\n    .pp-message {\n      display: block;\n      width: 100%;\n      height: 100%;\n      border: none;\n    }\n\n    div.pp-message {\n      background: #f4f4f4;\n      position: relative;\n    }\n  "],
                    template: "\n    <div class=\"pp-message\">\n      <iframe *ngIf=\"_src\" class=\"pp-message\" [src]=\"_src\"></iframe>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    PpMessageComponent.ctorParameters = function () { return [
        { type: DomSanitizer, },
    ]; };
    PpMessageComponent.propDecorators = {
        "src": [{ type: Input },],
    };
    return PpMessageComponent;
}());
export { PpMessageComponent };
//# sourceMappingURL=pp-message.js.map