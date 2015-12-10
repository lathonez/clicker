import { Page, NavController } from 'ionic/ionic';

@Page({
  templateUrl: 'app/clickers/clickers.html',
})
export class Clickers {
  constructor(nav: NavController) {
    this.nav = nav;
    this.title = 'Clickers';

    this.clickers = [
      { title: 'Orla Weather Moans' },
      { title: 'Wulf Being a fagat' },
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
    });
  }
}
