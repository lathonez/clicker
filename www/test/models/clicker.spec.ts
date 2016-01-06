'use strict';

import { Clicker } from '../../app/models/clicker';

export function main() {
  describe('Clicker', () => {

    it('initialises with the correct name', () => {
      let clicker = new Clicker('12434', 'testClicker');
      expect(clicker.getName()).toEqual('testClicker');
    });
  });
}

