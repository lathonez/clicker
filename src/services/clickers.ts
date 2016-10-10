import { Injectable }      from '@angular/core';
import { Store }           from '@ngrx/store';
import { Observable }      from 'rxjs/Observable';
import { ClickerActions }  from '../actions';
import { ClickerSelector } from '../selectors';
import { Clicker }         from '../models';
import { AppState }        from '../reducers';

@Injectable()
export class ClickersService {

  private store: Store<AppState>;
  private clickerActions: ClickerActions;

  constructor(store: Store<AppState>, clickerActions: ClickerActions) {
    this.store = store;
    this.clickerActions = clickerActions;
    window['clickersService'] = this;
    window['ClickerSelector'] = ClickerSelector;

    // apparently let has been removed from rxjs/Observalbe, it just does this:
    // http://stackoverflow.com/questions/38340541/how-to-use-rx-observable-prototype-let-operator
    store.let = function(fn: Function): any {
      return fn(this);
    };
  }

  public getData(): Observable<Clicker[]> {
    return this.store.let(ClickerSelector.getClickerItems());
  }

  public initialise(): void {
    this.store.dispatch(
      this.clickerActions.load()
    );
  }

  public isFetching(): Observable<boolean> {
    return this.store.let(
      ClickerSelector.getLoading()
    );
  }

  public doClick(id: string): void {
    this.store.dispatch(
      this.clickerActions.doClick(id)
    );
  }

  public newClicker(name: string): void {
    this.store.dispatch(
      this.clickerActions.newClicker(name)
    );
  }

  public removeClicker(id: string): void {
    this.store.dispatch(
      this.clickerActions.removeClicker(id)
    );
  }
}
