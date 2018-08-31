import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QiyuModule } from "../qiyu/qiyu.module";
import { PpMessageModule } from "../ppmessage/pp-message.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage
                    ],
                    imports: [
                        BrowserModule,
                        IonicModule.forRoot(MyApp),
                        QiyuModule.forRoot("46b996525d9ed35a725516a8a3bea1ac"),
                        PpMessageModule.forRoot("41d61548-ac30-11e8-8847-00163e0c79f6")
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage
                    ],
                    providers: [
                        StatusBar,
                        SplashScreen,
                        { provide: ErrorHandler, useClass: IonicErrorHandler }
                    ]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map