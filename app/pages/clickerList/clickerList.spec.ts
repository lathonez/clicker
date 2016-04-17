import {
  beforeEach,
  beforeEachProviders,
  ComponentFixture,
  describe,
  expect,
  injectAsync,
  it,
  TestComponentBuilder,
}                               from 'angular2/testing';
import { provide }              from 'angular2/core';
import { ClickerList }          from './clickerList';
import { Utils }                from '../../services/utils';
import {
  Config,
  Form,
  IonicApp,
  NavController,
  NavParams,
  Platform,
}                               from 'ionic-angular';

class MockClass {
  public get(): any {
    return {};
  }

  public getBoolean(): any {
    return true;
  }
};

let clickerList: ClickerList = null;
let clickerListFixture: ComponentFixture = null;

describe('ClickerList', () => {

  beforeEachProviders(() => [
    Form,
    provide(NavController, {useClass: MockClass}),
    provide(NavParams, {useClass: MockClass}),
    provide(Config, {useClass: MockClass}),
    provide(IonicApp, {useClass: MockClass}),
    provide(Platform, {useClass: MockClass}),
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .createAsync(ClickerList)
      .then((componentFixture: ComponentFixture) => {
        clickerListFixture = componentFixture;
        clickerList = componentFixture.componentInstance;
        clickerListFixture.detectChanges();
      })
      .catch(Utils.promiseCatchHandler);
  }));

  it('initialises', () => {
    expect(clickerList).not.toBeNull();
    expect(clickerListFixture).not.toBeNull();
  });
});
