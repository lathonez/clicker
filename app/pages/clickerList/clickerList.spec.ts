import { beforeEach, beforeEachProviders, describe, expect, it } from '@angular/core/testing';
import { provide }                                               from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers }   from '../../../test/diExports';
import { ClickersMock }                                          from '../../services/mocks';
import { ClickerList }                                           from './clickerList';
import { Clickers }                                              from '../../services';

this.fixture = null;
this.instance = null;

let clickerListProviders: Array<any> = [
  provide(Clickers, {useClass: ClickersMock}),
];

describe('ClickerList', () => {

  beforeEachProviders(() => providers.concat(clickerListProviders));
  beforeEach(injectAsyncWrapper(asyncCallbackFactory(ClickerList, this, true)));

  it('initialises', () => {
    expect(this.instance).not.toBeNull();
    expect(this.fixture).not.toBeNull();
  });
});
