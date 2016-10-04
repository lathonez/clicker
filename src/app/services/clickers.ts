import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs/Observable';
import { Store }           from '@ngrx/store';
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
