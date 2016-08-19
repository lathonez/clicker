'use strict';

import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Button }    from 'ionic-angular';
import { Clickers }  from '../../services';
import { Clicker } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'clicker-ngrx-button',
  templateUrl: 'build/components/clicker-ngrx-button/clicker-ngrx-button.html',
  // directives: [Button],
})

export class ClickerNgrxButton {
  @Input() public clicker: Clicker;
  @Output() public doClick: EventEmitter<string> = new EventEmitter<string>();

  private clickerService: Clickers;

  constructor(clickerService: Clickers) {
    this.clickerService = clickerService;
  }
}
