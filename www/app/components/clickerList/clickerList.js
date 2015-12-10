import { Page, NavController } from 'ionic/ionic';
import { Clickers } from '../../services/clickers';

@Page({
  templateUrl: 'app/components/clickerList/clickerList.html',
  providers: [Clickers],
})

export class ClickerList {
  constructor(
    nav: NavController,
    clickers: Clickers
  ) {
    this.nav = nav;
    this.clickerService = clickers;
    this.title = 'Clickers';
    this.clickers = this.clickerService.getClickers();
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
