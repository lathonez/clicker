import { ClickerList } from '../../../app/pages/clickerList/clickerList';
import { Clickers } from '../../../app/services/clickers';

let clickerList = null;

let mockClickers = Object.create(Clickers);

mockClickers.newClicker = function() { return true; };

export function main() {

  describe('ClickerList', () => {

    beforeEach(function() {
      clickerList = new ClickerList(null, mockClickers);
      spyOn(clickerList, 'newClicker').and.callThrough();
      spyOn(mockClickers, 'newClicker').and.callThrough();
    });

    it('initialises', () => {
      expect(clickerList).toBeDefined();
    });

    it('passes new clicker through to service', () => {
      clickerList.newClicker('dave');
      expect(clickerList.newClicker).toHaveBeenCalledWith('dave');
      expect(mockClickers.newClicker).toHaveBeenCalledWith('dave');
    });

    it('doesn\'t try to add a clicker with no name', () => {
      let rtn = clickerList.newClicker();
      expect(rtn).toBe(false);
      expect(clickerList.newClicker).toHaveBeenCalled();
      expect(mockClickers.newClicker).not.toHaveBeenCalled();
    });
  });
}
