'use strict';

import { SqlStorage }     from 'ionic-angular';

export class Storage {

  private storage: SqlStorage;

  constructor() {
    this.storage = Storage.initStorage();
  }

  private static initStorage(): SqlStorage {
    return new SqlStorage();
  }

  public get(key: string): Promise<{}> {
    return this.storage.get(key);
  }

  public set(key: string, value: string): Promise<{}> {
    return this.storage.set(key, value);
  }

  public remove(key: string): Promise<{}> {
    return this.storage.remove(key);
  }
}
