import {Inject, InjectionToken, ModuleWithProviders, NgModule} from "@angular/core";
import {PPMessage} from "./PP";

export const PP_ID = new InjectionToken("qiyu_key");
export let ppurl: string;

@NgModule()
export class PpMessageModule
{
  constructor(@Inject(PP_ID) ppid: string)
  {
    window['ppSettings'] = {
      app_uuid: ppid,
      view: {launcher_is_show: false}
    };

    let script = document.createElement("script");
    script.src = `https://ppmessage.cn/ppcom/assets/pp-library.min.js`;
    document.head.appendChild(script);
    PPMessage.ready().then(() => console.log("PP Message initialized"));
  }

  public static forRoot(appid: string): ModuleWithProviders
  {
    return {
      ngModule: PpMessageModule,
      providers: [{provide: PP_ID, useValue: appid}]
    }
  }
}
