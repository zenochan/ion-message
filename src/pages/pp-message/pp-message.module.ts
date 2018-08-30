import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PpMessagePage} from './pp-message';
import {CommonModule} from "@angular/common";
import {PpMessageModule} from "../../ppmessage/pp-message.module";

@NgModule({
  declarations: [
    PpMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PpMessagePage),
    CommonModule,
    PpMessageModule.forRoot()
  ],
})
export class PpMessagePageModule {}
