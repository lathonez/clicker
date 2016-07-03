'use strict';

import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  private value: any;
  constructor() {
    // NOTE: use number value if uncommenting <ion-range> in template
    // or use string value if uncommenting <ion-input> in template
    // this.value = 33;
    this.value = 'some text';
  }
  public onGainChange(arg: any): void {
      return;
  }
}
