'use strict';

import { Component } from '@angular/core';
import { Button }    from 'ionic-angular';
import { Clickers }  from '../../services';

@Component({
  selector: 'clicker-button',
  inputs: ['clicker: clicker'],
  templateUrl: 'build/components/clickerButton/clickerButton.html',
  directives: [Button],
})

export class ClickerButton {

  private clickerService: Clickers;

  constructor(clickerService: Clickers) {
    this.clickerService = clickerService;
  }
}
