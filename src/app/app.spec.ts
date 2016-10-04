import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS, TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
}                               from '@angular/platform-browser-dynamic/testing';
import { setBaseTestProviders } from '@angular/core/testing';
import { ClickerApp }           from './app';
import { Page2 }                from './pages/page2/page2';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

let clickerApp: ClickerApp = null;

class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public close(): any {
    return true;
  }

  public setRoot(): any {
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
    spyOn(clickerApp['menu'], 'close');
    // cant be bothered to set up DOM testing for app.ts to get access to @ViewChild (Nav)
    clickerApp['nav'] = (<any>clickerApp['menu']);
    spyOn(clickerApp['nav'], 'setRoot');
    clickerApp.openPage(clickerApp['pages'][1]);
    expect(clickerApp['menu']['close']).toHaveBeenCalled();
    expect(clickerApp['nav'].setRoot).toHaveBeenCalledWith(Page2);
  });
});
