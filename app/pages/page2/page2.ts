'use strict';

import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  // NOTE: reproducing clicker issue 108: 'value' should be a string
  // type if you uncommented the <ion-input> line in page2.html, or
  // if you uncommented <ion-range>, then 'value' should be an int

  // private value: number;
  private value: string;
  constructor() {

    // this.value = 33;
    this.value = 'some text';
  }
  public onGainChange(arg: any): void {
      return;
  }
}
