import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, StateUpdate, StateUpdates } from '@ngrx/effects';
import { AppState } from '../reducers';
import { ClickerActions } from '../actions';
import { Clicker } from '../models';
import { ClickerDataService } from '../services/clicker.data.service';

/* tslint:disable: no-constructor-vars */
@Injectable()
export class ClickerEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private clickerActions: ClickerActions,
    private clickerDataService: ClickerDataService
  ) { }

  @Effect() public loadCollection$: Observable<Action> = this.updates$
    .whenAction(ClickerActions.LOAD)
    // .do(x => { console.log('Effect:loadCollection$:A', x); })

    // Watch database node and get items.
    .switchMap(() => this.clickerDataService.getClickers())
    .map((items: Clicker[]) => this.clickerActions.loadSuccess(items));
  // Terminate effect.
  // .ignoreElements();

  @Effect() public update$: Observable<StateUpdate<AppState>> = this.updates$
    .whenAction(ClickerActions.NEW_CLICKER, ClickerActions.REMOVE_CLICKER, ClickerActions.DO_CLICK)
    .do(x => {
      this.clickerDataService.saveClickers(x.state.clickers.clickerItems);
    })
    // Terminate effect.
    .ignoreElements();
}
