import { NgModule }         from '@angular/core';
import { TranslateModule }  from '@ngx-translate/core';
import { IonicModule }      from 'ionic-angular';
import { ComponentsModule } from '../components';
import { ClickerList }      from './clickerList/clickerList';
import { Page2 }            from './page2/page2';

@NgModule({
  declarations: [
    ClickerList,
    Page2,
  ],
  imports: [ IonicModule, ComponentsModule, TranslateModule ],
  exports: [
    ClickerList,
    // Page2,
  ],
  entryComponents: [],
  providers: [ ],
})

export class PagesModule {}
