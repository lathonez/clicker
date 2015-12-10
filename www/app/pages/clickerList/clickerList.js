import { Page, NavController } from 'ionic/ionic';
import { Clickers } from '../../services/clickers';

@Page({
  templateUrl: 'app/pages/clickerList/clickerList.html',
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

  doClick(clickerId) {
    this.clickerService.doClick(clickerId);
  }

  newClicker(clickerId) {
    if (!clickerId) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(clickerId);
  }
}
