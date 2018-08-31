import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
import {PPMessage} from "../../ppmessage/PP";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  url;

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer)
  {
    // Qiyu.ready().then(() => {
    //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl(Qiyu.url());
    // });

  }

  showPPMessage()
  {
    PPMessage.show()
  }
}
