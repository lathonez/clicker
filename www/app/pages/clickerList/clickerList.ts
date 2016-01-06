'use strict';

import { Page, NavController } from 'ionic-framework/ionic';
import { Clickers } from '../../services/clickers';
import { ClickerButton } from '../../components/clickerButton/clickerButton';

@Page({
  templateUrl: 'app/pages/clickerList/clickerList.html',
  providers: [Clickers],
  directives: [ClickerButton],
})

export class ClickerList {

  private clickerService: Clickers;
  private nav: NavController;
  private title: string;

  constructor(nav: NavController, clickerService: Clickers) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
  }

  public newClicker(name: string) {
    if (!name) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(name);

    // TODO - clear text on input field
  }
}
