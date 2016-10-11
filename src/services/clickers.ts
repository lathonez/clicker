import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import { ClickerActions }  from '../actions/clicker';
// import { ClickerSelector } from '../selectors';
import { Clicker } from '../models';
// import { AppState }        from '../reducers';
import * as FromRootReducer from '../reducers';
import * as ClickerActions from '../actions/clicker';

@Injectable()
export class ClickersService {

  private store: Store<FromRootReducer.AppState>;

  constructor(store: Store<FromRootReducer.AppState>) {
    this.store = store;
    window['clickersService'] = this;
    // window['ClickerSelector'] = ClickerSelector;
    /*
        // apparently let has been removed from rxjs/Observalbe, it just does this:
        // http://stackoverflow.com/questions/38340541/how-to-use-rx-observable-prototype-let-operator
        store.let = function (fn: Function): any {
          return fn(this);
        };
    */
  }

  public getData(): Observable<Clicker[]> {
    return this.store.let(FromRootReducer.getAppClickers_ClickerItems);
  }

  public initialise(): void {
    this.store.dispatch(
      new ClickerActions.LoadAction()
    );
  }

  public isFetching(): Observable<boolean> {
    return this.store.let(
      FromRootReducer.getAppClickers_GetLoading);
  }

  public doClick(id: string): void {
    this.store.dispatch(
      new ClickerActions.DoClickAction(id)
    );
  }

  public newClicker(name: string): void {
    this.store.dispatch(
      new ClickerActions.NewClickerAction(name)
    );
  }

  public removeClicker(id: string): void {
    this.store.dispatch(
      new ClickerActions.RemoveClickerAction(id)
    );
  }
}
