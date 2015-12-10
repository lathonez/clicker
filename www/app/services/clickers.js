import { Clicker } from '../models/clicker';
import { Injectable } from 'angular2/angular2';
import { _ } from 'underscore/underscore';

// Intended to handle interface with GoogleSheets only - should not directly access app logic (e.g. use Clicker service)

@Injectable()
export class Clickers {

  clickers: Array<Clicker>;

  constructor() {
    this.clickers = [
      new Clicker(0, 'Orla Weather Moans'),
      new Clicker(1, 'Wulf Being a fagat'),
    ];
  }

  getClicker(id) {
    return _.find(this.clickers, function (clicker) {
      return clicker.id === id;
    });
  }

  getClickers() {
    return this.clickers;
  }

  newClicker(name) {
    // TODO - dynamic id
    this.clickers.push(new Clicker(2, name));
  }

  doClick(id) {
    this.getClicker(id).doClick();
  }
}
