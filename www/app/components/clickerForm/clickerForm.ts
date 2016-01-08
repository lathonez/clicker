'use strict';

import { AbstractControl, Component, ControlGroup, FormBuilder, Validators, View } from 'angular2/angular2';
import { Clickers } from '../../services/clickers';
import { Button, Icon, TextInputElement, TextInput } from 'ionic-framework/ionic';
import { Utils } from '../../services/utils';

@Component({
  selector: 'clicker-form'
})

@View({
  templateUrl: 'app/components/clickerForm/clickerForm.html',
  directives: [Button, Icon, TextInputElement, TextInput],
})

export class ClickerForm {

  private clickerService: Clickers;
  private form: ControlGroup;
  private clickerNameInput: AbstractControl;

  constructor(clickerService: Clickers, fb: FormBuilder) {
    this.clickerService = clickerService;

    this.form = fb.group({
      clickerNameInput: ['', Validators.required]
    });

    this.clickerNameInput = this.form.controls['clickerNameInput'];
  }

  public newClicker(formValue: Object) {

    // need to mark the clickerName control as touched so validation
    // will apply after the user has tried to add a clicker
    this.clickerNameInput.markAsTouched();

    if (!this.clickerNameInput.valid) {
      return false;
    }

    this.clickerService.newClicker(formValue['clickerNameInput']);

    // reset the value of the contorl and all validation / state
    this.clickerNameInput = Utils.resetControl(this.clickerNameInput);
  }
}
