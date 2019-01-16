import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule }                  from '@ngx-translate/core';
import { IonicModule }                      from 'ionic-angular';
import { ClickerButton }                    from './clickerButton/clickerButton';
import { ClickerForm }                      from './clickerForm/clickerForm';
import { LanguagePicker }                   from './languagePicker/languagePicker';
import { TranslatePipeMock }                from '../pipes/translate.pipe.mock';

@NgModule({
  declarations: [
    ClickerForm,
    ClickerButton,
    LanguagePicker,
    TranslatePipeMock,
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
    TranslatePipeMock,
  ],
  entryComponents: [],
  providers: [ ],
})

export class ComponentsModule {}
