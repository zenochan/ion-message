import { InjectionToken, ModuleWithProviders } from "@angular/core";
export declare const PP_ID: InjectionToken<{}>;
export declare let ppurl: string;
export declare class PpMessageModule {
    constructor(ppid: string);
    static forRoot(appid: string): ModuleWithProviders;
}
