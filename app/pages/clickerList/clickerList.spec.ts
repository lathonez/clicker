import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  injectAsync,
  it,
}                               from '@angular/core/testing';
import {
  ComponentFixture,
  TestComponentBuilder,
}                               from '@angular/compiler/testing';
import { provide }              from '@angular/core';
import { ClickerList }          from './clickerList';
import { Utils }                from '../../services/utils';
import {
  Config,
  Form,
  App,
  NavController,
  NavParams,
  Platform,
}                               from 'ionic-angular';

class MockClass {
  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 42;
  }
}

let clickerList: ClickerList = null;
let clickerListFixture: ComponentFixture<ClickerList> = null;

describe('ClickerList', () => {

  beforeEachProviders(() => [
    Form,
    provide(NavController, {useClass: MockClass}),
    provide(NavParams, {useClass: MockClass}),
    provide(Config, {useClass: MockClass}),
    provide(App, {useClass: MockClass}),
    provide(Platform, {useClass: MockClass}),
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .createAsync(ClickerList)
      .then((componentFixture: ComponentFixture<ClickerList>) => {
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
