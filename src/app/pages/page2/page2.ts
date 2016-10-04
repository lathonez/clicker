'use strict';

import { Component }        from '@angular/core';
import { Range, TextInput } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page2/page2.html',
  directives: [Range, TextInput],
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
