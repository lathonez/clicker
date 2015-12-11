import { Click } from './click';

// Represents a single Clicker
export class Clicker {

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.clicks = [];
  }

  doClick() {
    this.clicks.push(new Click());
  }

  getCount() {
    return this.clicks.length;
  }
}
