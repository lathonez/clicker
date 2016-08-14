'use strict';

import { FormGroup, FormBuilder, Validators }        from '@angular/forms';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Component, Output, EventEmitter }                                 from '@angular/core';
import { Button, Icon, Item, Label, TextInput }      from 'ionic-angular';
import { Clickers, Utils }                           from '../../services';

@Component({
  selector: 'clicker-ngrx-form',
  templateUrl: 'build/components/clicker-ngrx-form/clicker-ngrx-form.html',
  directives: [Button, Icon, Item, Label, TextInput, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})

export class ClickerNgrxForm {

  private clickerService: Clickers;
  private form: FormGroup;

  @Output() public newClicker: EventEmitter<string>  = new EventEmitter<string>();

  constructor(clickerService: Clickers, fb: FormBuilder) {
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
