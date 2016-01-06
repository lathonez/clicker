import { ClickerButton } from '../../../app/components/clickerButton/clickerButton';

let clickerButton = null;

export function main() {

  describe('ClickerButton', () => {

    beforeEach(function() {
      clickerButton = new ClickerButton(null);
    });

    it('initialises', () => {
      expect(clickerButton).toBeDefined();
    });
  });
}
