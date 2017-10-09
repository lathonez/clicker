import { Component }       from '@angular/core';
import { NavController }   from 'ionic-angular';
import { ClickersService } from '../../services';

@Component({
  templateUrl: './clickerList.html',
})

export class ClickerList {

  public pageTitle: string;
  public clickerService: ClickersService;
  private nav: NavController;

  constructor(nav: NavController, clickerService: ClickersService) {
    this.pageTitle = 'TITLE.CLICKER_LIST';
    this.nav = nav;
    this.clickerService = clickerService;
  }
}
