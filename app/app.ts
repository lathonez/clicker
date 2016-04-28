// http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

'use strict';

import { Type }                    from 'angular2/core';
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
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    this.app.getComponent('nav').setRoot(page.component);
  };
}
