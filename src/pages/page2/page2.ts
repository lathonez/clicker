'use strict';

import { Component }        from '@angular/core';

@Component({
  templateUrl: 'page2.html',
})

export class Page2 {

  // demonstrating #108
  private rangeValue: number;
  private inputValue: string;

  constructor() {

    this.rangeValue = 33;
    this.inputValue = 'some text';
  }

  public onGainChange(): void {
    return;
  }
}
