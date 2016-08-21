import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';

import { AppState, ClickerItemState } from '../reducers';

/* tslint:disable: use-strict typedef */
export function getClickerItemState() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.clickers);
}

export function getLoaded() {
  return compose(_getLoaded(), getClickerItemState());
}

export function getLoading() {
  return compose(_getLoading(), getClickerItemState());
}

export function getClickerItems() {
  return compose(_getClickerItems(), getClickerItemState());
}

function _getLoaded() {
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.loaded);
}

function _getLoading() {
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.loading);
}

function _getClickerItems() {
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.clickerItems);
}
