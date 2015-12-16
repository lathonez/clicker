'use strict';

import { Clickers } from '../../services/clickers';

describe('Clickers', () => {
  it('initialises with empty clickers', () => {
    let clickers = new Clickers();
    expect(clickers.clickers).toEqual([]);
  });

  it('returns undefined for a bad id', () => {
    let clickers = new Clickers();
    expect(clickers.getClicker('1234')).not.toBeDefined();
  });
})