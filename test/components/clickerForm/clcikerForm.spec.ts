import { ClickerForm } from '../../../app/components/clickerForm/clickerForm';
import { Clickers } from '../../../app/services/clickers';
import { FormBuilder } from 'angular2/common';
import { Utils } from '../../../app/services/utils';

let clickerForm = null;

let mockClickers = Object.create(Clickers);

mockClickers.newClicker = function() { return true; };

export function main() {

  describe('ClickerForm', () => {

    beforeEach(function() {
      clickerForm = new ClickerForm(mockClickers, new FormBuilder());
      spyOn(clickerForm, 'newClicker').and.callThrough();
      spyOn(mockClickers, 'newClicker').and.callThrough();
    });

    it('initialises', () => {
      expect(clickerForm).toBeDefined();
    });

    it('passes new clicker through to service', () => {
      let clickerName = 'dave';
      spyOn(Utils, 'resetControl').and.callThrough();
      clickerForm.clickerNameInput.updateValue(clickerName, true);
      clickerForm.newClicker({clickerNameInput: clickerName});
      expect(clickerForm.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
      expect(mockClickers.newClicker).toHaveBeenCalledWith(clickerName);
      expect(Utils.resetControl).toHaveBeenCalledWith(clickerForm.clickerNameInput);
    });

    it('doesn\'t try to add a clicker with no name', () => {
      let rtn = clickerForm.newClicker();
      expect(rtn).toBe(false);
      expect(clickerForm.newClicker).toHaveBeenCalled();
      expect(mockClickers.newClicker).not.toHaveBeenCalled();
    });
  });
}
