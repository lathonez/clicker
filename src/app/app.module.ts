import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ClickerApp }                               from './app.component';
import { ClickerList, PagesModule, Page2 }          from '../pages';
import { ClickersService, StorageService }          from '../services';
import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ClickerApp,
  ],
  imports: [
    PagesModule,
    IonicModule.forRoot(ClickerApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickerApp,
    ClickerList,
    Page2,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClickersService,
    StorageService,
    SplashScreen,
    StatusBar,
  ],
})

export class AppModule {}
