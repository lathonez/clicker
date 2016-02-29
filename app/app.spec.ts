import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
import { IonicApp, Platform }   from 'ionic-framework/ionic';
import { ClickerApp }           from './app';
import * as utf8_test           from 'utf8';
import { observableFirebaseObject } from 'angular2-firebase';
import { MockFirebase }         from 'mockfirebase';

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
      console.log(utf8_test.encode('\xA9'));
      observableFirebaseObject(null);
    });

    it('should do basic mocked firebase operations', () => {
      let fb: MockFirebase = new MockFirebase('https://mocked.firebaseio.com/dummy');
      expect(fb).toBeDefined();

      let expectedAuthState: any = null;

      fb.onAuth((authData: FirebaseAuthData) => {
        expect(authData).toEqual(expectedAuthState);
        console.log('authData0: ', JSON.stringify(authData, null, 2));
      });

      expectedAuthState = {user: 'dummy'};

      fb.authAnonymously((err, authData: FirebaseAuthData) => {
        expect(authData).toEqual(expectedAuthState);
        console.log('authData: ', err, JSON.stringify(authData, null, 2));
      });

      fb.changeAuthState(expectedAuthState);

      fb.push({
        dummyKey: 'dummyVal',
      });
      fb.flush();

      let error: Error = new Error('Oh no!');
      fb.failNext('set', error);
      let err: Error = null;
      fb.set('data', function onComplete (err0: Error): void {
        err = err0;
      });

      expect(err).toBeNull('expected null but got' + JSON.stringify(err));
      fb.flush();
      expect(err).toBe(error, 'err passed to callback');
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
