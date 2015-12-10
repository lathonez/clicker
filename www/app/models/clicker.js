import { Injectable } from 'angular2/angular2';

// Represents a single Clicker in the Clicker class

@Injectable()
export class Clicker {

  id: string;
  name: string;
  count: 0;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  doClick() {
    this.count++;
  }
}
