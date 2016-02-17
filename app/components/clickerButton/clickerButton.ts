'use strict';

import { Component, View } from 'angular2/core';
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

  constructor(clickerService: Clickers) {
    this.clickerService = clickerService;
  }
}
