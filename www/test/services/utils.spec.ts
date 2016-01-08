import { Utils } from '../../app/services/utils';
import { Control } from 'angular2/angular2';

export function main() {

  describe('Utils', () => {

    it('resets a control', () => {
      let control = new Control('');
      let returnedControl = null;
      control.markAsTouched();
      control.updateValue('dave');
      returnedControl = Utils.resetControl(control);
      expect(returnedControl.touched).toBe(false);
      expect(returnedControl.untouched).toBe(true);
      expect(returnedControl.pristine).toBe(true);
      expect(returnedControl.dirty).toBe(false);
      expect(returnedControl.value).toBe('');
    });
  });
}
