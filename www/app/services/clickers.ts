'use strict';

import { Clicker } from '../models/clicker';
import { Click } from '../models/click';
import { Injectable } from 'angular2/angular2';
import { SqlStorage } from 'ionic-framework/ionic';

@Injectable()
export class Clickers {

  private clickers: Array<Clicker>;
  private ids: Array<String>; // we need to keep a separate reference to ids so we can lookup when the app loads from scratch
  private storage: SqlStorage;

  constructor() {
    this.storage = new SqlStorage(); // typeof SqlStorage is not assignable to type StorageEngine seems to be an ionic issue
    this.clickers = [];
    this.ids = [];
    this.initClickers();
  }

  private initClickers() {
    // get all existing ids
    this.storage.get('ids')
      .then((ids) => {
        // ids are stored as stringified JSON array
        this.ids = JSON.parse(String(ids)) || [];

        for (let id of this.ids) {
          this.storage.get(id)
            .then((clicker) => {
              this.clickers.push(this.initClicker(clicker));
            });
        }
      });
  }

  // initialise a clicker from a raw JSON string out of the DB
  private initClicker(clicker) {
    const parsedClicker = JSON.parse(clicker);
    const newClicker = new Clicker(parsedClicker.id, parsedClicker.name);

    // add the clicks - need to re-instantiate object
    for (let click of parsedClicker.clicks) {
      const newClick = new Click();
      newClick.setTime(click.time);
      newClick.setTime(click.location);
      newClicker.addClick(click);
    }

    return newClicker;
  }

  public getClicker(id) {
    return this.clickers.find(clicker => { return clicker.getId() === id; });
  }

  public getClickers() {
    return this.clickers;
  }

  public newClicker(name) {
    const id = this.uid();
    const clicker = new Clicker(id, name);

    // add the clicker to the service
    this.clickers.push(clicker);
    // add the id to the service (need to keep a separate reference of IDs so we can cold load clickers)
    this.ids.push(id);
    // save the clicker by id
    this.storage.set(id, JSON.stringify(clicker));
    // save the service's ids array
    this.storage.set('ids', JSON.stringify(this.ids));
  }

  public removeClicker(id) {

    // remove clicker from the service
    this.clickers = this.clickers.filter(clicker => { return clicker.getId() !== id; });

    // remove from ids array
    this.ids = this.ids.filter(filterId => { return filterId !== id; });

    // null id in db
    this.storage.remove(id);

    // update service's ids array
    this.storage.set('ids', JSON.stringify(this.ids));
  }

  public doClick(id) {
    const clicker = this.getClicker(id);
    clicker.doClick();
    // save the clicker with updated click in storage
    this.storage.set(clicker.getId(), JSON.stringify(clicker));
  }

  private uid() {
    return Math.random().toString(35).substr(2, 10);
  }
}
