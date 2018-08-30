import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PpMessagePage } from './pp-message';
import { CommonModule } from "@angular/common";
import { PpMessageModule } from "../../ppmessage/pp-message.module";
var PpMessagePageModule = /** @class */ (function () {
    function PpMessagePageModule() {
    }
    PpMessagePageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        PpMessagePage,
                    ],
                    imports: [
                        IonicPageModule.forChild(PpMessagePage),
                        CommonModule,
                        PpMessageModule.forRoot()
                    ],
                },] },
    ];
    return PpMessagePageModule;
}());
export { PpMessagePageModule };
//# sourceMappingURL=pp-message.module.js.map