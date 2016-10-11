import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule }                 from 'ionic-angular';
import { ClickerButton, ClickerForm }       from './';

@NgModule({
  declarations: [
    ClickerForm,
    ClickerButton,
  ],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    ClickerButton,
    ClickerForm,
  ],
  entryComponents: [],
  providers: [ ],
})

export class ComponentsModule {}
