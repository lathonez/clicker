'use strict';

import { Component, View } from 'angular2/core';
import { Button }          from 'ionic-angular';
import { Clickers }        from '../../services/clickers';

@Component({
  selector: 'clicker-button',
  inputs: ['clicker: clicker'],
})

@View({
  templateUrl: 'build/components/clickerButton/clickerButton.html',
  directives: [Button],
})

export class ClickerButton {

  private clickerService: Clickers;

  constructor(clickerService: Clickers) {
    this.clickerService = clickerService;
  }
}
