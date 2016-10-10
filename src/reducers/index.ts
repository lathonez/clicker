import { Observable } from 'rxjs/Observable';

import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
/* tslint:disable */
import { combineReducers, ActionReducer } from '@ngrx/store'; // re: ActionReducer https://github.com/Microsoft/TypeScript/issues/6307
import { ClickerItemState, clickerReducer } from './clicker';

import { share, Selector } from '../utils/util';

import * as fromClicker from './clicker';

import { Click, Clicker } from '../models';

export interface AppState {
  clickers: ClickerItemState;
}

const reducers = {
  clickers: fromClicker.clickerReducer,
};

const developmentReducer = compose(
  storeFreeze,
  storeLogger(),
  combineReducers)(reducers);
// const productionReducer = combineReducers(reducers);

/*
Don't know where PROD is set.

export function reducer(state: any, action: any) {
  if (PROD) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
*/
export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}

/***********
 * Selectors
 ***********/
export function getClickersState(state$: Observable<AppState>) {
  return state$.select(s => s.clickers);
}

export const getAppClickers_ClickerItems = share(compose(fromClicker.getClickerItems, getClickersState));
export const getAppClickers_GetLoaded = share(compose(fromClicker.getLoaded, getClickersState));
export const getAppClickers_GetLoading = share(compose(fromClicker.getLoading, getClickersState));

/*
export * from './clicker';

export default compose(storeFreeze, storeLogger(), combineReducers)({
    // search: searchReducer,
    // books: booksReducer,
    clickers: clickerReducer,
});
*/
