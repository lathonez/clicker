'use strict';

import { Component, ControlGroup, FormBuilder, Validators, View } from 'angular2/angular2';
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

  constructor(clickerService: Clickers, fb: FormBuilder) {
    this.clickerService = clickerService;

    this.clickerForm = fb.group({
      clickerName: ['', Validators.required]
    });
  }

  public newClicker(name: string) {

    if (!name) {
      // TODO - validate
      return false;
    }

    this.clickerService.newClicker(name);

    // TODO - clear text on input field
  }
}
