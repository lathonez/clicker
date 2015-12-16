'use strict';

import { Click } from './click';

// Represents a single Clicker
export class Clicker {

  private id: string;
  private name: string;
  private clicks: Array<Click>;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.clicks = [];
  }

  public doClick() {
    this.clicks.push(new Click());
  }

  public getCount() {
    return this.clicks.length;
  }
}
