'use strict';

import { Type }                    from '@angular/core';
import { App, IonicApp, Platform } from 'ionic-angular';
import { ClickerList }             from './pages/clickerList/clickerList';
import { Page2 }                   from './pages/page2/page2';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
})
export class ClickerApp {

  private rootPage: Type;
  private pages: Array<{title: string, component: Type}>;
  private app: IonicApp;
  private platform: Platform;

  constructor(app: IonicApp, platform: Platform) {

    this.app = app;
    this.platform = platform;

    this.rootPage = ClickerList;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Clickers', component: ClickerList },
      { title: 'Goodbye Ionic', component: Page2 },
    ];
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    this.app.getComponent('nav').setRoot(page.component);
  };
}
