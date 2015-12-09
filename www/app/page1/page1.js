import { Page, NavController } from 'ionic/ionic';

@Page({
  templateUrl: 'app/page1/page1.html',
})
export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
