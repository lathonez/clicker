
// bit of a hack (though we'd want to test app anyway at some point)
// can't get includeAllSources to work in Karma: including the main app.ts does this implicitly

import { IonicApp, Platform } from 'ionic-framework/ionic';
import { ClickerApp } from '../app/app';

let clickerApp = null;

function getComponentStub(name) {
  let component = {
    setRoot: function() { return true; },
    close: function(root) { return true; },
  };
  return component;
}

export function main() {

  describe('ClickerApp', () => {

    beforeEach(function() {
      let ionicApp = new IonicApp(null, null, null);
      let platform = new Platform();
      clickerApp = new ClickerApp(ionicApp, platform);
    });

    it('initialises with two possible pages', () => {
      expect(clickerApp.pages.length).toEqual(2);
    });

    it('initialises with a root page', () => {
      expect(clickerApp.rootPage).not.toBe(null);
    });

    it('initialises with an app', () => {
      expect(clickerApp.app).not.toBe(null);
    });

    it('opens a page', () => {
      spyOn(clickerApp.app, 'getComponent').and.callFake(getComponentStub);
      clickerApp.openPage(clickerApp.pages[1]);
      expect(clickerApp.app.getComponent).toHaveBeenCalledWith('leftMenu');
      expect(clickerApp.app.getComponent).toHaveBeenCalledWith('nav');
    });
  });
}
