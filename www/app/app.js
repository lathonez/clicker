import { App, IonicApp, Platform } from 'ionic/ionic';
import { ClickerList } from './components/clickerList/clickerList';
import { Page2 } from './components/page2/page2';
import './app.scss';

@App({
  templateUrl: 'app/app.html',
})
export class MyApp {
  constructor(app: IonicApp, platform: Platform) {
    this.pages = [
      { title: 'Clickers', component: ClickerList },
      { title: 'Goodbye Ionic', component: Page2 },
    ];

    this.rootPage = ClickerList;
    this.app = app;
    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();
    // navigate to the new page if it is not the current page
    const nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
