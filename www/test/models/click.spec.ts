'use strict';

import { Click } from '../../app/models/click';

export function main() {

  describe('Click', () => {

    it('initialises with defaults', () => {
      let click = new Click();

      // toString() prints out something like "Thu Jan 07 2016 14:05:14 GMT+1300 (NZDT)"
      // comparing millis directly sometimes fails test (as it will be one milli too late!)
      let currentDateString = new Date().toString();
      let defaultDateString = new Date(click.getTime()).toString();

      expect(currentDateString).toEqual(defaultDateString);
      expect(click.getLocation()).toEqual('TODO');
    });

    it('initialises with overrides', () => {
      let current = new Date().getTime();
      let location = 'MY LOCATION';
      let click = new Click(current, location);
      expect(click.getTime()).toEqual(current);
      expect(click.getLocation()).toEqual(location);
    });
  });
}
