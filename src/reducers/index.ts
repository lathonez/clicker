import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
/* tslint:disable */
import { combineReducers, ActionReducer } from '@ngrx/store'; // re: ActionReducer https://github.com/Microsoft/TypeScript/issues/6307
import { ClickerItemState, clickerReducer } from './clicker';

export interface AppState {
  clickers: ClickerItemState;
}

export * from './clicker';

export default compose(storeFreeze, storeLogger(), combineReducers)({
    // search: searchReducer,
    // books: booksReducer,
    clickers: clickerReducer,
});
