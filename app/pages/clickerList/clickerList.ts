'use strict';

import { Component }                  from '@angular/core';
import { NavController }              from 'ionic-angular';
import { Clickers }                   from '../../services';
import { ClickerButton, ClickerForm } from '../../components';

@Component({
  templateUrl: 'build/pages/clickerList/clickerList.html',
  directives: [ClickerButton, ClickerForm],
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
}
