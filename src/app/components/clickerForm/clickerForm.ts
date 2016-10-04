'use strict';

import { FormGroup, FormBuilder, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { TextInput }                                                from 'ionic-angular';
import { ClickersService, Utils }                                   from '../../services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'clicker-form',
  templateUrl: 'build/components/clickerForm/clickerForm.html',
  directives: [TextInput, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})

export class ClickerForm {

  private clickerService: ClickersService;
  private form: FormGroup;

  @Output() public newClicker: EventEmitter<string> = new EventEmitter<string>();

  constructor(clickerService: ClickersService, fb: FormBuilder) {
    this.clickerService = clickerService;

    this.form = fb.group({
      clickerNameInput: ['', Validators.required],
    });
  }

  public newClickerLocal(formValue: Object): boolean {
    // need to mark the clickerName control as touched so validation
    // will apply after the user has tried to add a clicker
    this.form.controls['clickerNameInput'].markAsTouched();

    if (!this.form.controls['clickerNameInput'].valid) {
      return false;
    }

    // this.clickerService.newClicker(formValue['clickerNameInput']);
    this.newClicker.emit(formValue['clickerNameInput']);

    // reset the value of the contorl and all validation / state
    this.form.controls['clickerNameInput'] = Utils.resetControl(this.form.controls['clickerNameInput']);

    return true;
  }
}
