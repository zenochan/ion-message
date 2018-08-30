import {Inject, InjectionToken, ModuleWithProviders, NgModule} from "@angular/core";
import {PpMessageComponent} from "./pp-message";
import {CommonModule} from "@angular/common";

export const PP_URL = new InjectionToken("qiyu_key");
export let ppurl: string;

@NgModule({
  declarations: [PpMessageComponent],
  imports: [CommonModule],
  exports: [PpMessageComponent]
})
export class PpMessageModule
{
  constructor(@Inject(PP_URL) url: string)
  {
    ppurl = url;
  }

  public static forRoot(url: string = null): ModuleWithProviders
  {
    return {
      ngModule: PpMessageModule,
      providers: [{provide: PP_URL, useValue: url}]
    }
  }
}
