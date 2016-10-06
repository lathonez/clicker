'use strict';

import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ClickersService }                                                 from '../../services';
import { Clicker }                                                         from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'clicker-button',
  templateUrl: 'clickerButton.html',
})

export class ClickerButton {
  @Input() public clicker: Clicker;
  @Output() public doClick: EventEmitter<string> = new EventEmitter<string>();

  private clickerService: ClickersService;

  constructor(clickerService: ClickersService) {
    this.clickerService = clickerService;
  }
}
