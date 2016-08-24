import { beforeEach, beforeEachProviders, describe, expect, it } from '@angular/core/testing';
import { provide }                                               from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers }   from '../../test/diExports';
import { ClickersService }        from './clickers';
import { ClickerList }            from '../pages/clickerList/clickerList';
import { StorageMock } from './mocks';
import { provideStore }                                  from '@ngrx/store';
import reducers                                          from '../reducers';
import actions                                           from '../actions';

this.fixture = null;
this.instance = null;
this.clickers = null;

let clickerListProviders: Array<any> = [
  ClickersService,
  provide('Storage', { useClass: StorageMock }),
  provideStore(reducers),
  actions,
];

let beforeEachFn: Function = ((testSpec) => {
  testSpec.clickers = testSpec.instance.clickerService;
});

describe('ClickersService', () => {

  beforeEachProviders(() => providers.concat(clickerListProviders));
  beforeEach(injectAsyncWrapper(asyncCallbackFactory(ClickerList, this, false, beforeEachFn)));

  it('initialises', () => {
    expect(this.clickers).not.toBeNull();
    expect(this.instance).not.toBeNull();
    expect(this.fixture).not.toBeNull();
  });
});
