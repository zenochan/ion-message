import { InjectionToken, ModuleWithProviders } from "@angular/core";
export declare const PP_URL: InjectionToken<{}>;
export declare let ppurl: string;
export declare class PpMessageModule {
    constructor(url: string);
    static forRoot(url?: string): ModuleWithProviders;
}
