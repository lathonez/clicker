import { Injectable }                        from '@angular/core';
import { Observable }                        from 'rxjs/Observable';
import { Action }                            from '@ngrx/store';
import { Effect, StateUpdate, StateUpdates } from '@ngrx/effects';
import { AppState }                          from '../reducers';
import { ClickerActions }                    from '../actions';
import { Clicker }                           from '../models';
import { DataService }                       from '../services/data';

@Injectable()
export class ClickerEffects {

  // for some reason you have to declare this in the constructor??
  // ORIGINAL EXCEPTION: TypeError: Cannot read property 'whenAction' of undefined
  // private updates: StateUpdates<AppState>;

  private actions: ClickerActions;
  private dataService: DataService;

  /* tslint:disable: no-constructor-vars */
  constructor(private updates$: StateUpdates<AppState>, actions: ClickerActions, dataService: DataService) {
    // this.updates$ = updates;
    this.actions = actions;
    this.dataService = dataService;
  }

  @Effect() public loadCollection$: Observable<Action> = this.updates$
    .whenAction(ClickerActions.LOAD)
    // .do(x => { console.log('Effect:loadCollection$:A', x); })

    // Watch database node and get items.
    .switchMap(() => this.dataService.getClickers())
    .map((items: Clicker[]) => this.actions.loadSuccess(items));
  // Terminate effect.
  // .ignoreElements();

  @Effect() public update$: Observable<StateUpdate<AppState>> = this.updates$
    .whenAction(ClickerActions.NEW_CLICKER, ClickerActions.REMOVE_CLICKER, ClickerActions.DO_CLICK)
    .do(x => {
      this.dataService.saveClickers(x.state.clickers.clickerItems);
    })
    // Terminate effect.
    .ignoreElements();
}
