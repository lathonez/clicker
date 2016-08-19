import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import { AppState } from '../reducers';
import { ClickerActions } from '../actions';
// import { FiveBooksDataService } from '../services/fivebooks.data.service';
import { Clicker } from '../models';
import { Clickers } from '../services/clickers';

/* tslint:disable: no-constructor-vars */
@Injectable()
export class ClickerEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private clickerActions: ClickerActions,
    // private fiveBooksDataService: FiveBooksDataService
    private clickers: Clickers
  ) {}

  @Effect() public loadCollection$ = this.updates$
    .whenAction(ClickerActions.LOAD)
    .do(x => { console.log('Effect:loadCollection$:A', x); })

    // Watch database node and get items.
    // .switchMap(() => this.clickers.getClickers())
    .map(() => this.clickers.getClickers())
    .do(x => { console.log('Effect:loadCollection$:B', x); })
    .map((items: Clicker[]) => this.clickerActions.loadSuccess(items));
  // Terminate effect.
  // .ignoreElements();
}
