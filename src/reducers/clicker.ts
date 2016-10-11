/* tslint:disable */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ClickerActions, ClickerActionTypes } from '../actions/clicker';
import { Click, Clicker } from '../models';
import { Utils }          from '../services';

export interface ClickerItemState {
  loaded: boolean;
  loading: boolean;
  clickerItems: Clicker[];
};

export const initialState: ClickerItemState = {
  loaded: false,
  loading: false,
  clickerItems: [],
};

export function clickerReducer(
  state = initialState, 
  action: ClickerActions,
  ): ClickerItemState {
  'use strict';

  let rtn: any;
  let updatedClickerItems: any;

  switch (action.type) {
    case ClickerActionTypes.LOAD:
      rtn = Utils.assign(state, {
        loading: true,
      });
      break;

    case ClickerActionTypes.LOAD_SUCCESS:
      rtn = {
        loaded: true,
        loading: false,
        clickerItems: action.payload,
      };
      break;

    case ClickerActionTypes.DO_CLICK:
      updatedClickerItems = state.clickerItems
        .map(clicker => {
          if (clicker.getId() !== action.payload) {
            return clicker;
          }

          let updatedClicker: Clicker = new Clicker(clicker.id, clicker.name);
          updatedClicker.clicks = [...clicker.clicks, new Click()];
          return updatedClicker;
        });
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    case ClickerActionTypes.NEW_CLICKER:
      updatedClickerItems = [...state.clickerItems, new Clicker(Utils.uid(), action.payload)];
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    case ClickerActionTypes.REMOVE_CLICKER:
      updatedClickerItems = state.clickerItems.filter(item => item.id !== action.payload);
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    default:
      rtn = state;
  }
  return rtn;
};

export function getClickerItems(state$: Observable<ClickerItemState>) {
  return state$.select(s => s.clickerItems);
}

export function getLoaded(state$: Observable<ClickerItemState>) {
  return state$.select(s => s.loaded);
}

export function getLoading(state$: Observable<ClickerItemState>) {
  return state$.select(s => s.loading);
}
