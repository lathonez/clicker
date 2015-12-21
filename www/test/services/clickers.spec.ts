'use strict';

import { Clickers } from '../../app/services/clickers';

export function main() {

  describe('Clickers', () => {
    it('initialises with empty clickers', () => {
      let clickers = new Clickers();
      expect(clickers.getClickers()).toEqual([]);
    });

    it('returns undefined for a bad id', () => {
      let clickers = new Clickers();
      expect(clickers.getClicker('1234')).not.toBeDefined();
    });
  });
};
