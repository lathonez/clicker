'use strict';

import { Component, View } from 'angular2/angular2';
import { Clickers } from '../../services/clickers';
import { Button } from 'ionic-framework/ionic';

@Component({
  selector: 'clicker-button',
  inputs: ['clicker: clicker'],
})

@View({
  templateUrl: 'app/components/clickerButton/clickerButton.html',
  directives: [Button],
})

export class ClickerButton {

  private clickerService: Clickers;

  constructor(clickers: Clickers) {
    this.clickerService = clickers;
  }
}
