'use strict';

import { AbstractControl } from 'angular2/common';

export class Utils {

  // bit of a hack here to reset the validation / state on the control as well as the value
  // expecting a Control.reset() method to do this but there doesn't seem to be one
  // http://stackoverflow.com/questions/33084280/how-to-reset-control-value
  public static resetControl(control: AbstractControl) {
    control['updateValue']('');
    control['_touched'] = false;
    control['_untouched'] = true;
    control['_pristine'] = true;
    control['_dirty'] = false;
    return control;
  }
}
