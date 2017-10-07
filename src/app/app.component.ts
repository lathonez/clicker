import { Component, ViewChild }          from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { TranslateService }              from '@ngx-translate/core';
import { StatusBar }                     from '@ionic-native/status-bar';
import { SplashScreen }                  from '@ionic-native/splash-screen';
import { ClickerList, Page2 }            from '../pages';

@Component({
  templateUrl: './app.html',
})
export class ClickerApp {

  @ViewChild(Nav) public nav: Nav;

  private menu: MenuController;
  private platform: Platform;
  private splash: SplashScreen;
  private status: StatusBar;
  private translateService: TranslateService;

  public rootPage: any;
  public pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, menu: MenuController, splash: SplashScreen, status: StatusBar, translateService: TranslateService) {

    this.menu = menu;
    this.platform = platform;
    this.splash = splash;
    this.status = status;
    this.translateService = translateService;

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
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.status.styleDefault();
      this.splash.hide();
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
