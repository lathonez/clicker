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
  }

  public getData(): Observable<Clicker[]> {
    return this.store.select(ClickerSelector.getClickerItems());
  }

  public initialise(): void {
    this.store.dispatch(
      this.clickerActions.load()
    );
  }

  public isFetching(): Observable<boolean> {
    return this.store.select(
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
