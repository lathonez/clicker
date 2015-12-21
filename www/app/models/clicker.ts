'use strict';

import { Click } from './click';

// Represents a single Clicker
export class Clicker {

  private id: string;
  private name: string;
  private clicks: Array<Click>;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.clicks = [];
  }

  public doClick() {
    this.clicks.push(new Click());
  }

  public addClick(click: Click) {
    this.clicks.push(click);
  }

  public getCount() {
    return this.clicks.length;
  }

  public getId() {
    return this.id;
  }
}
