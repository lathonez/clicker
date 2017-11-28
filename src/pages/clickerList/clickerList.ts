import { Component }       from '@angular/core';
import { NavController }   from 'ionic-angular';
import { ClickersService } from '../../services';
import { version }         from '../../../package.json';

@Component({
  templateUrl: './clickerList.html',
})

export class ClickerList {

  public clickerService: ClickersService;
  public title: string = 'TITLE.CLICKER_LIST';
  public version: string;
  private nav: NavController;

  constructor(nav: NavController, clickerService: ClickersService) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.version = version;
  }
}
