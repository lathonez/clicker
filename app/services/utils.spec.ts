import { Utils } from './utils';
import { AbstractControl, Control } from 'angular2/common';

export function main(): void {
  'use strict';

  describe('Utils', () => {

    it('resets a control', () => {
      let control: Control = new Control('');
      let returnedControl: AbstractControl = null;
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
