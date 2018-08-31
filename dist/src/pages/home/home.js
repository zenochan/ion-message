import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
import { PPMessage } from "../../ppmessage/PP";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sanitizer) {
        // Qiyu.ready().then(() => {
        //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl(Qiyu.url());
        // });
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
    }
    HomePage.prototype.showPPMessage = function () {
        PPMessage.show();
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: DomSanitizer, },
    ]; };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map