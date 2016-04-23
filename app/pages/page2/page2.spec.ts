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
import { Page2 }                from './page2';
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

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 42;
  }
}

let page2: Page2 = null;
let page2Fixture: ComponentFixture = null;

describe('Page2', () => {

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
      .createAsync(Page2)
      .then((componentFixture: ComponentFixture) => {
        page2Fixture = componentFixture;
        page2 = componentFixture.componentInstance;
        page2Fixture.detectChanges();
      })
      .catch(Utils.promiseCatchHandler);
  }));

  it('initialises', () => {
    expect(page2).not.toBeNull();
    expect(page2Fixture).not.toBeNull();
  });
});
