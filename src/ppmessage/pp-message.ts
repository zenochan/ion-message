import {Component, Input, Output} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ppurl} from "./pp-message.module";

/**
 * Generated class for the PpMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pp-message',
  styles: [`
    .pp-message {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
    }

    div.pp-message {
      background: #f4f4f4;
      position: relative;
    }
  `],
  template: `
    <div class="pp-message">
      <iframe *ngIf="_src" class="pp-message" [src]="_src"></iframe>
    </div>
  `,
  // templateUrl: 'pp-message.html'
})
export class PpMessageComponent
{

  text: string;
  _src: any = null;

  @Input()
  get src()
  {
    return this._src
  }

  set src(value: string)
  {
    if (value) {
      this._src = this.san.bypassSecurityTrustResourceUrl(value)
    } else {
      this._src = null
    }
  }

  constructor(private san: DomSanitizer)
  {
    this.text = 'Hello World';

    (window as any).ppSettings = {
      app_uuid: '41d61548-ac30-11e8-8847-00163e0c79f6',
      ent_user_id: "234",
      ent_user_name: "haah",
      ent_user_icon: "",
      ent_user_mobile: "18888888888",
    };
    if (ppurl) {
      this._src = san.bypassSecurityTrustResourceUrl(ppurl)
    }
  }

}
