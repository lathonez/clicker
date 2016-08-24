'use strict';

import { Component, provide, Type, ViewChild }           from '@angular/core';
import { disableDeprecatedForms, provideForms }          from '@angular/forms';
import { provideStore }                                  from '@ngrx/store';
import { runEffects }                                    from '@ngrx/effects';
import { ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar }                                     from 'ionic-native';
import { ClickersService, DataService, StorageService }  from './services';
import { ClickerList, Page2 }                            from './pages';
import actions                                           from './actions';
import effects                                           from './effects';
import reducers                                          from './reducers';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  templateUrl: 'build/app.html',
})
export class ClickerApp {

  @ViewChild(Nav) private nav: Nav;

  private rootPage: Type;
  private pages: Array<{ title: string, component: Type }>;
  private menu: MenuController;
  private platform: Platform;

  constructor(platform: Platform, menu: MenuController) {

    this.platform = platform;
    this.menu = menu;

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
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  };
}

ionicBootstrap(ClickerApp, [
  disableDeprecatedForms(),
  provideForms(),
  StorageService,
  DataService,
  ClickersService,
  provide('Storage', { useClass: Storage }),
  provideStore(reducers),
  runEffects(effects),
  actions,
]);
