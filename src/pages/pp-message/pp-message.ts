import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PpMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pp-message',
  templateUrl: 'pp-message.html',
})
export class PpMessagePage {

  src = "https://ppmessage.cn/ppcom/enterprise/eyJ1dWlkIjoiNDFkNjE1NDgtYWMzMC0xMWU4LTg4NDctMDAxNjNlMGM3OWY2IiwiYXBwX25hbWUiOiJaZW5vIn0="

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PpMessagePage');
  }

}
