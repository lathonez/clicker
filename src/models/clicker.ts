'use strict';

import { Click } from './';

// Represents a single Clicker
export class Clicker {

  public id: string;
  public name: string;
  public clicks: Array<Click>;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.clicks = [];
  }

  public doClick(): void {
    this.clicks.push(new Click());
  }

  public addClick(click: Click): void {
    this.clicks.push(click);
  }

  public getCount(): number {
    return this.clicks.length;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
}
