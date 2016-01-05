import { ClickerButton } from '../../../app/components/clickerButton/clickerButton';
import { Clickers } from '../../../app/services/clickers';

let clickerButton = null;

export function main() {

  describe('ClickerButton', () => {

    beforeEach(function() {
      clickerButton = new ClickerButton(new Clickers());
    });

    it('initialises', () => {
      expect(clickerButton).toBeDefined();
    });
  });
}
