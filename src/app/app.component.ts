import { Component, ViewChild }          from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { ClickerList, Page2 }            from '../pages';
import { environment }                   from '../environments/environment';

@Component({
  templateUrl: 'app.html',
})
export class ClickerApp {

  @ViewChild(Nav) public nav: Nav;

  public rootPage: any;
  public pages: Array<{ title: string, component: any }>;
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

      // https://github.com/lathonez/clicker/issues/148#issuecomment-254436635
      // StatusBar.styleDefault();
      console.log('production: ' + environment.production);
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  };
}
