
// bit of a hack (though we'd want to test app anyway at some point)
// can't get includeAllSources to work in Karma: including the main app.ts does this implicitly

import { Platform } from 'ionic-framework/ionic';
import { ClickerApp } from '../app/app';

let clickerApp = null;

export function main() {

  describe('ClickerApp', () => {

    beforeEach(function() {
      let platform = new Platform();
      clickerApp = new ClickerApp(platform);
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
  });
}
