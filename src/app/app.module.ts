import { NgModule, ErrorHandler }                   from '@angular/core';
import { HttpClient, HttpClientModule }             from '@angular/common/http';
import { BrowserModule }                            from '@angular/platform-browser';
import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { TranslateLoader, TranslateModule }         from '@ngx-translate/core';
import { TranslateHttpLoader }                      from '@ngx-translate/http-loader';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ClickerApp }                               from './app.component';
import { ClickerList, PagesModule, Page2 }          from '../pages';
import { ClickersService, StorageService }          from '../services';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ClickerApp,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    IonicModule.forRoot(ClickerApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickerApp,
    ClickerList,
    Page2,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ClickersService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})

export class AppModule {}
