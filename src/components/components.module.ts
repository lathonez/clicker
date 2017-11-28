import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule }                  from '@ngx-translate/core';
import { IonicModule }                      from 'ionic-angular';
import { ClickerButton }                    from './clickerButton/clickerButton';
import { ClickerForm }                      from './clickerForm/clickerForm';
import { LanguagePicker }                   from './languagePicker/languagePicker';

@NgModule({
  declarations: [
    ClickerForm,
    ClickerButton,
    LanguagePicker,
  ],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    ClickerButton,
    ClickerForm,
    LanguagePicker,
  ],
  entryComponents: [],
  providers: [ ],
})

export class ComponentsModule {}
