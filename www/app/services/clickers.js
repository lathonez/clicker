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
        this.ids = JSON.parse(ids);
        _.each(this.ids, function (id) {
          // get all existing clickers by id
          this.storage.get(id)
            .then((clicker) => {
              const parsedClicker = JSON.parse(clicker);
              // instantiate a new instance of clicker (parsing it from JSON just gives us Object)
              this.clickers.push(new Clicker(parsedClicker.id, parsedClicker.name, parsedClicker.count));
            });
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

    // add the clicker to the service
    this.clickers.push(clicker);
    // add the id to the service (need to keep a separate reference of IDs so we can cold load clickers)
    this.ids.push(id);
    // save the clicker by id
    this.storage.set(id, JSON.stringify(clicker));
    // save the service's ids arrays
    this.storage.set('ids', JSON.stringify(this.ids));
  }

  doClick(id) {
    const clicker = this.getClicker(id);
    clicker.doClick();
    // save the clicker with updated click in storage
    this.storage.set(clicker.id, JSON.stringify(clicker));
  }

  uid() {
    return Math.random().toString(35).substr(2, 10);
  }
}
