import { FormGroup, FormBuilder, Validators }        from '@angular/forms';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Component }                                 from '@angular/core';
import { Button, Icon, Item, Label, TextInput }      from 'ionic-angular';
import { Clickers, Utils }                           from '../../services';

@Component({
  selector: 'clicker-form',
  templateUrl: 'build/components/clickerForm/clickerForm.html',
  directives: [Button, Icon, Item, Label, TextInput, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})

export class ClickerForm {

  private clickerService: Clickers;
  private form: FormGroup;

  constructor(clickerService: Clickers, fb: FormBuilder) {
    this.clickerService = clickerService;

    this.form = fb.group({
      clickerNameInput: ['', Validators.required],
    });
  }

  public newClicker(formValue: Object): boolean {

    // need to mark the clickerName control as touched so validation
    // will apply after the user has tried to add a clicker
    this.form.controls['clickerNameInput'].markAsTouched();

    if (!this.form.controls['clickerNameInput'].valid) {
      return false;
    }

    this.clickerService.newClicker(formValue['clickerNameInput']);

    // reset the value of the contorl and all validation / state
    this.form.controls['clickerNameInput'] = Utils.resetControl(this.form.controls['clickerNameInput']);

    return true;
  }
}
