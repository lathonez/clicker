'use strict';

import { AbstractControl, Component, ControlGroup, FormBuilder, Validators, View } from 'angular2/angular2';
import { Clickers } from '../../services/clickers';
import { Button, Icon, TextInputElement, TextInput } from 'ionic-framework/ionic';

@Component({
  selector: 'clicker-form'
})

@View({
  templateUrl: 'app/components/clickerForm/clickerForm.html',
  directives: [Button, Icon, TextInputElement, TextInput],
})

export class ClickerForm {

  private clickerService: Clickers;
  private clickerForm: ControlGroup;
  private clickerName: AbstractControl;

  constructor(clickerService: Clickers, fb: FormBuilder) {
    this.clickerService = clickerService;

    this.clickerForm = fb.group({
      clickerName: ['', Validators.required]
    });

    this.clickerName = this.clickerForm.controls['clickerName'];
  }

  public newClicker(formValue: Object) {

    let clickerName = null;

    // need to mark the clickerName control as touched so validation
    // will apply after the user has tried to add a clicker
    this.clickerName.markAsTouched();

    if (!this.clickerName.valid) {
      return false;
    }

    clickerName = formValue['clickerName'];

    this.clickerService.newClicker(clickerName);

    // TODO - clear text on input field
  }
}
