import { Component }       from '@angular/core';
import { NavController }   from 'ionic-angular';
import { ClickersService } from '../../services';

@Component({
  templateUrl: './clickerList.html',
})

export class ClickerList {

  public clickerService: ClickersService;
  private nav: NavController;

  constructor(nav: NavController, clickerService: ClickersService) {
    this.nav = nav;
    this.clickerService = clickerService;
  }
}
