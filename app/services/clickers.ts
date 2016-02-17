'use strict';

import { Clicker } from '../models/clicker';
import { Click } from '../models/click';
import { Injectable } from 'angular2/core';
import { SqlStorage } from 'ionic-framework/ionic';

@Injectable()
export class Clickers {

  private clickers: Array<Clicker>;
  private ids: Array<String>; // we need to keep a separate reference to ids so we can lookup when the app loads from scratch
  private storage: SqlStorage;

  constructor() {
    this.storage = Clickers.initStorage(); // typeof SqlStorage is not assignable to type StorageEngine seems to be an ionic issue
    this.ids = [];
    this.clickers = [];
    this.initIds()
      .then((ids: Array<String>) => { this.ids = ids; })
      .then(() => this.initClickers(this.ids))
      .then((clickers: Array<Clicker>) => this.clickers = clickers);
  }

  // initialise Ids from SQL storage
  private initIds() {
    return new Promise((resolve) => {
      let ids = [];
      this.storage.get('ids') // return the promise so we can chain initClickers
        .then((rawIds) => {
          // ids are stored as stringified JSON array
          ids = JSON.parse(String(rawIds)) || [];
        })
        .then(() => resolve(ids));
    });
  }

  // initialise Clickers from SQL storage given an array of ids
  private initClickers(ids) {
    // get all existing ids
    return new Promise((resolve) => {
      let clickers = [];
      for (let id of ids) {
        this.storage.get(id)
          .then((clicker) => {
            clickers.push(this.initClicker(clicker));
          });
      }
      resolve(clickers);
    });
  }

  // initialise a clicker from a raw JSON string out of the DB
  private initClicker(clicker) {
    const parsedClicker = JSON.parse(clicker);
    const newClicker = new Clicker(parsedClicker.id, parsedClicker.name);

    // add the clicks - need to re-instantiate object
    for (let click of parsedClicker.clicks) {
      newClicker.addClick(new Click(click.time, click.location));
    }

    return newClicker;
  }

  private static initStorage() {
    return new SqlStorage();
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

    return id;
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
