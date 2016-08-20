'use strict';

import { Inject, Injectable } from '@angular/core';
import { Storage }            from './';
import { Click, Clicker }     from '../models';

@Injectable()
export class Clickers {

  private clickers: Array<Clicker>;
  private ids: Array<string>; // we need to keep a separate reference to ids so we can lookup when the app loads from scratch
  private storage: Storage;

  // don't know why Injection isn't working without @Inject:
  // http://stackoverflow.com/questions/34449486/angular-2-0-injected-http-service-is-undefined
  constructor(@Inject('Storage') storage: Storage) {
    this.storage = storage;
    this.ids = [];
    this.clickers = [];
    this.initIds()
      .then((ids: Array<string>) => { this.ids = ids; })
      .then(() => this.initClickers(this.ids))
      .then((clickers: Array<Clicker>) => this.clickers = clickers);
  }

  // initialise Ids from SQL storage
  private initIds(): Promise<{}> {
    return new Promise((resolve: Function) => {
      let ids: Array<string> = [];
      this.storage.get('ids') // return the promise so we can chain initClickers
        .then((rawIds: string) => {
          if (rawIds) {
            // ids are stored as stringified JSON array
            ids = JSON.parse(rawIds);
          } else {
            ids = [];
          }
        })
        .then(() => resolve(ids));
    });
  }

  // initialise Clickers from SQL storage given an array of ids
  private initClickers(ids: Array<string>): Promise<{}> {
    // get all existing ids
    return new Promise((resolve: Function) => {
      let clickers: Array<Clicker> = [];
      for (let id of ids) {
        this.storage.get(id)
          .then((clicker: string) => {
            clickers.push(this.initClicker(clicker));
          });
      }
      // TODO - this is a bug it will resolve before the loop has completed
      resolve(clickers);
    });
  }

  // initialise a clicker from a raw JSON string out of the DB
  private initClicker(clicker: string): Clicker {
    const parsedClicker: Object = JSON.parse(clicker);
    const newClicker: Clicker = new Clicker(parsedClicker['id'], parsedClicker['name']);

    // add the clicks - need to re-instantiate object
    for (let click of parsedClicker['clicks']) {
      newClicker.addClick(new Click(click.time, click.location));
    }

    return newClicker;
  }

  public getClicker(id: string): Clicker {
    return this.clickers['find']((clicker: Clicker) => { return clicker.getId() === id; } );
  }

  public getClickers():  Array<Clicker> {
    return this.clickers;
  }

  public newClicker(name: string): string {
    const id: string = this.uid();
    const clicker: Clicker = new Clicker(id, name);

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

  public removeClicker(id: string): void {

    // remove clicker from the service
    this.clickers = this.clickers.filter((clicker: Clicker) => { return clicker.getId() !== id; });

    // remove from ids array
    this.ids = this.ids.filter((filterId: string) => { return filterId !== id; });

    // null id in db
    this.storage.remove(id);

    // update service's ids array
    this.storage.set('ids', JSON.stringify(this.ids));
  }

  public doClick(id: string): void {
    const clicker: Clicker = this.getClicker(id);
    clicker.doClick();
    // save the clicker with updated click in storage
    this.storage.set(clicker.getId(), JSON.stringify(clicker));
  }

  private uid(): string {
    return Math.random().toString(35).substr(2, 10);
  }
}
