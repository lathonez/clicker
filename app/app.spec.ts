import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
import { IonicApp, Platform }   from 'ionic-angular';
import { ClickerApp }           from './app';

// this needs doing _once_ for the entire test suite, hence it's here
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let clickerApp: ClickerApp = null;

function getComponentStub(name: string): any {
  'use strict';

  let component: Object = {
    setRoot: function(): boolean { return true; },
    close: function(root: any): boolean { return true; },
  };
  return component;
}

export function main(): void {
  'use strict';

  describe('ClickerApp', () => {

    beforeEach(() => {
      let ionicApp: IonicApp = new IonicApp(null, null, null);
      let platform: Platform = new Platform();
      clickerApp = new ClickerApp(ionicApp, platform);
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
}
