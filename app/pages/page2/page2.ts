'use strict';

import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  private value: number;
  constructor() {
    this.value = 33;
  }
  public onGainChange(arg: any): void {
      return;
  }
}
