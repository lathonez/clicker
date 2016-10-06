import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ClickerApp } from './app.component';
import { ClickerList } from '../pages';
import { ClickerForm } from '../components';
import { ClickerButton } from '../components';
import { ClickersService } from '../services';
import { ClickerActions } from '../actions';
import { Page2 } from '../pages';

@NgModule({
  declarations: [
    ClickerApp,
    ClickerList,
    Page2,
    ClickerForm,
    ClickerButton,
  ],
  imports: [
    IonicModule.forRoot(ClickerApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickerApp,
    ClickerList,
    Page2,
  ],
  providers: [ ClickerActions, ClickersService ],
})
export class AppModule {}
