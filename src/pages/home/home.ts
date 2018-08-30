import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Qiyu} from "../../qiyu/qiyu";
import {DomSanitizer} from "@angular/platform-browser";
import {PpMessagePage} from "../pp-message/pp-message";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url;

  constructor(public navCtrl: NavController,private sanitizer:DomSanitizer) {
    Qiyu.ready().then(() => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(Qiyu.url());
    });

    // this.navCtrl.push(PpMessagePage)
  }

}
