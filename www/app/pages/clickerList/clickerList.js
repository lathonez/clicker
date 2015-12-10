import { Page, NavController } from 'ionic/ionic';
import { Clickers } from '../../services/clickers';
import { ClickerButton } from '../../components/clickerButton/clickerButton';

@Page({
  templateUrl: 'app/pages/clickerList/clickerList.html',
  providers: [Clickers],
  directives: [ClickerButton],
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

  doClick(id) {
    this.clickerService.doClick(id);
  }

  newClicker(id) {
    if (!id) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(id);
  }
}
