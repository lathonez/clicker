'use strict';

import { Page, NavController } from 'ionic/ionic';
import { Clickers } from '../../services/clickers';
import { ClickerButton } from '../../components/clickerButton/clickerButton';

@Page({
  templateUrl: 'app/pages/clickerList/clickerList.html',
  providers: [Clickers],
  directives: [ClickerButton],
})

export class ClickerList {

  clickerService: Clickers;
  nav: NavController;
  title: string;

  constructor(nav: NavController, clickerService: Clickers) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
  }

  newClicker(id) {
    if (!id) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(id);

    // TODO - clear text on input field
  }
}
