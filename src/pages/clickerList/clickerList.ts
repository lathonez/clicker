import { Component }       from '@angular/core';
import { NavController }   from 'ionic-angular';
import { ClickersService } from '../../services';

@Component({
  templateUrl: 'clickerList.html',
})

export class ClickerList {

  private clickerService: ClickersService;
  private nav: NavController;
  private title: string;

  constructor(nav: NavController, clickerService: ClickersService) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
  }
}
