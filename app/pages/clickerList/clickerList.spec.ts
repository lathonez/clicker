import { ClickerList } from './clickerList';

let clickerList: ClickerList = null;

export function main(): void {
  'use strict';

  describe('ClickerList', () => {

    beforeEach(() => {
      clickerList = new ClickerList(null, null);
    });

    it('initialises', () => {
      expect(clickerList).not.toBeNull();
    });
  });
}
