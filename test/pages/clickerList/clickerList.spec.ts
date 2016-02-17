import { ClickerList } from '../../../app/pages/clickerList/clickerList';

let clickerList = null;

export function main() {

  describe('ClickerList', () => {

    beforeEach(function() {
      clickerList = new ClickerList(null, null);
    });

    it('initialises', () => {
      expect(clickerList).toBeDefined();
    });
  });
}
