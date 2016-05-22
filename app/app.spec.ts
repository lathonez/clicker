import { ADDITIONAL_TEST_BROWSER_PROVIDERS, TEST_BROWSER_STATIC_PLATFORM_PROVIDERS } from '@angular/platform-browser/testing/browser_static';
import { BROWSER_APP_DYNAMIC_PROVIDERS }                from '@angular/platform-browser-dynamic';
import { resetBaseTestProviders, setBaseTestProviders } from '@angular/core/testing';
import { ClickerApp }                                   from './app';

resetBaseTestProviders();
setBaseTestProviders(
  TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  [
    BROWSER_APP_DYNAMIC_PROVIDERS,
    ADDITIONAL_TEST_BROWSER_PROVIDERS,
  ]
);

let clickerApp: ClickerApp = null;

function getComponentStub(name: string): any {
  'use strict';

  let component: Object = {
    setRoot: function(): boolean { return true; },
    close: function(root: any): boolean { return true; },
  };
  return component;
}

class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public getComponent(): any {
    return true;
  }
}

describe('ClickerApp', () => {

  beforeEach(() => {
    let mockClass: any = (<any>new MockClass());
    clickerApp = new ClickerApp(mockClass, mockClass);
  });

  it('initialises with two possible pages', () => {
    expect(clickerApp['pages'].length).toEqual(2);
  });

  it('initialises with a root page', () => {
    expect(clickerApp['rootPage']).not.toBe(null);
  });

  it('initialises with an app', () => {
    expect(clickerApp['app']).not.toBe(null);
  });

  it('opens a page', () => {
    spyOn(clickerApp['app'], 'getComponent').and.callFake(getComponentStub);
    clickerApp.openPage(clickerApp['pages'][1]);
    expect(clickerApp['app'].getComponent).toHaveBeenCalledWith('leftMenu');
    expect(clickerApp['app'].getComponent).toHaveBeenCalledWith('nav');
  });
});
