import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { ClickerApp } from './app.component';
import { ClickerList } from '../pages';
import { ClickerForm } from '../components';
import { ClickerButton } from '../components';
import { ClickersService } from '../services';
// import { ClickerActions } from '../actions';
import { Page2 } from '../pages';
// import { clickerReducer, initialState } from '../reducers';
import { reducer } from '../reducers';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

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
    // StoreModule.provideStore({ clicker: clickerReducer }, { clicker: initialState }),
    StoreModule.provideStore(reducer),
    // EffectsModule.run(AppFirebaseEffects),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickerApp,
    ClickerList,
    Page2,
  ],
  providers: [ ClickersService ],
})
export class AppModule {}
