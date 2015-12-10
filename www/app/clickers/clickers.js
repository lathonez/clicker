import { Page, NavController } from 'ionic/ionic';

@Page({
  templateUrl: 'app/clickers/clickers.html',
})
export class Clickers {
  constructor(nav: NavController) {
    this.nav = nav;
    this.title = 'Clickers';

    this.clickers = [
      { title: 'Orla Weather Moans', component: 'button' },
      { title: 'Wulf Being a fagat', component: 'button' },
    ];
  }

  doClicker(clicker) {
    console.log(clicker);
  }

  newClicker(clicker) {
    if (!clicker) {
      // TODO - validate
      return false;
    }

    this.clickers.push({
      title: clicker,
      component: 'button',
    });
  }
}
