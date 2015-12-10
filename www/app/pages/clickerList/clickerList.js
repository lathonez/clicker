import { Page, NavController } from 'ionic/ionic';
import { Clicker } from '../../models/clicker';
import { Clickers } from '../../services/clickers';
import { ClickerButton } from '../../components/clickerButton/clickerButton';

@Page({
  templateUrl: 'app/pages/clickerList/clickerList.html',
  providers: [Clickers],
  directives: [ClickerButton],
})

export class ClickerList {

  clickers: Array<Clicker>;
  clickerService: Clickers;
  nav: NavController;

  constructor(nav: NavController, clickerService: Clickers) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
    this.clickers = this.clickerService.getClickers();
  }

  newClicker(id) {
    if (!id) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(id);
  }
}
