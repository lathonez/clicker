import { beforeEach, beforeEachProviders, describe, expect, it } from '@angular/core/testing';
import { provide }                                               from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers }   from '../../test/diExports';
import { Clickers }    from './clickers';
import { Clicker }     from '../models/clicker';
import { ClickerList } from '../pages/clickerList/clickerList';
import { StorageMock } from './mocks';

this.fixture = null;
this.instance = null;
this.clickers = null;

let clickerListProviders: Array<any> = [
  Clickers,
  provide('Storage', { useClass: StorageMock }),
];

let beforeEachFn: Function = ((testSpec) => {
  testSpec.clickers = testSpec.instance.clickerService;
  spyOn(testSpec.clickers.storage, 'set').and.callThrough();
});

describe('Clickers', () => {

  beforeEachProviders(() => providers.concat(clickerListProviders));
  beforeEach(injectAsyncWrapper(asyncCallbackFactory(ClickerList, this, false, beforeEachFn)));

  it('initialises', () => {
    expect(this.clickers).not.toBeNull();
    expect(this.instance).not.toBeNull();
    expect(this.fixture).not.toBeNull();
  });

  it('initialises with empty clickers', () => {
    expect(new Clickers(null).getClickers()).toEqual([]);
  });

  it('initialises with clickers from mock storage', (done: Function) => {
    this.clickers['initClickers']([])
      .then(() => {
        expect(this.clickers.getClickers().length).toEqual(StorageMock.CLICKER_IDS.length);
        done();
      });
  });

  it('can initialise a clicker from string', () => {
    let clickerString: string = '{"id":"0g2vt8qtlm","name":"harold","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
    let clicker: Clicker = this.clickers.initClicker(clickerString);
    expect(clicker.getName()).toEqual('harold');
    expect(clicker.getCount()).toEqual(2);
  });

  it('returns undefined for a bad id', () => {
    expect(this.clickers.getClicker('dave')).not.toBeDefined();
  });

  it('adds a new clicker with the correct name', () => {
    let idAdded: string = this.clickers.newClicker('dave');
    expect(this.clickers['storage'].set).toHaveBeenCalledWith(idAdded, jasmine.any(String));
    expect(this.clickers.getClickers()[3].getName()).toEqual('dave');
  });

  it('removes a clicker by id', () => {
    let idToRemove: string = this.clickers.newClicker('dave');
    this.clickers.removeClicker(idToRemove);
    expect(this.clickers['storage'].set).toHaveBeenCalledWith(idToRemove, jasmine.any(String));
  });

  it('does a click', () => {
    let idToClick: string = this.clickers.newClicker('dave');
    let clickedClicker: Clicker = null;
    this.clickers.doClick(idToClick);
    expect(this.clickers['storage'].set).toHaveBeenCalledWith(idToClick, jasmine.any(String));
    clickedClicker = this.clickers.getClicker(idToClick);
    expect(clickedClicker.getCount()).toEqual(1);
  });

  it('loads IDs from storage', (done: Function) => {
    this.clickers.initIds()
      .then((ids: Array<string>) => {
        expect(ids).toEqual(StorageMock.CLICKER_IDS);
        done();
      });
  });

  it('loads clickers from storage', (done: Function) => {
    this.clickers.initClickers(StorageMock.CLICKER_IDS)
      .then((resolvedClickers: Array<Clicker>) => {
        expect(resolvedClickers.length).toEqual(3);
        expect(resolvedClickers[0].getId()).toEqual(StorageMock.CLICKER_IDS[0]);
        expect(resolvedClickers[1].getId()).toEqual(StorageMock.CLICKER_IDS[1]);
        expect(resolvedClickers[2].getId()).toEqual(StorageMock.CLICKER_IDS[2]);
        done();
      });
  });
});
