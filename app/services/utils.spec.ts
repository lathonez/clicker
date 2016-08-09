import { Utils }                        from './';
import { AbstractControl, FormControl } from '@angular/forms';

describe('Utils', () => {

  it('resets a control', () => {
    let control: FormControl = new FormControl('');
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
