'use strict';

import { Click } from '../../app/models/click';

export function main() {

  describe('Click', () => {

    it('initialises with defaults', () => {
      let click = new Click();
      expect(click.getTime()).toBeCloseTo(new Date().getTime(), 2);
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
