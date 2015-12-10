import { Clicker } from '../models/clicker';
import { Injectable } from 'angular2/angular2';
import { Storage, SqlStorage } from 'ionic/ionic';
import { _ } from 'underscore/underscore';

// Intended to handle interface with GoogleSheets only - should not directly access app logic (e.g. use Clicker service)

@Injectable()
export class Clickers {

  clickers: Array<Clicker>;
  ids: Array<String>; // we need to keep a separate reference to ids so we can lookup when the app loads from scratch
  storage: Storage;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.clickers = [];
    this.ids = [];
    this.initClickers();
  }

  initClickers() {
    // get all existing ids
    this.storage.get('ids')
      .then((ids) => {
        _.each(JSON.parse(ids), function (id) {
          console.log(id);
          this.storage.get(id)
            .then((clicker) => { this.clickers.push(JSON.parse(clicker)); });
        }, this);
      });
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
    const id = this.uid();
    const clicker = new Clicker(id, name);

    this.clickers.push(clicker);
    this.ids.push(id);
    this.storage.set(id, JSON.stringify(clicker));
    this.storage.set('ids', JSON.stringify(this.ids));
  }

  doClick(id) {
    this.getClicker(id).doClick();
  }

  uid() {
    return Math.random().toString(35).substr(2, 10);
  }
}
