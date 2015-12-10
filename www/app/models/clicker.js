import { Injectable } from 'angular2/angular2';

// Represents a single Clicker in the Clicker class

@Injectable()
export class Clicker {

  id: string;
  name: string;
  count: 0;

  constructor(id, name, count) {
    this.id = id;
    this.name = name;
    this.count = count || 0;
  }

  doClick() {
    this.count++;
  }
}
