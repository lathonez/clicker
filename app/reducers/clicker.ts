import { Action }         from '@ngrx/store';
import { ClickerActions } from '../actions';
import { Click, Clicker } from '../models';
import { Utils }          from '../services';

export interface ClickerItemState {
  loaded: boolean;
  loading: boolean;
  clickerItems: Clicker[];
};

const initialState: ClickerItemState = {
  loaded: false,
  loading: false,
  clickerItems: [],
};

export default function (state: ClickerItemState = initialState, action: Action): ClickerItemState {
  'use strict';

  let rtn: any;
  let updatedClickerItems: any;

  switch (action.type) {
    case ClickerActions.LOAD:
      rtn = Utils.assign(state, {
        loading: true,
      });
      break;

    case ClickerActions.LOAD_SUCCESS:
      rtn = {
        loaded: true,
        loading: false,
        clickerItems: action.payload,
      };
      break;

    case ClickerActions.DO_CLICK:
      updatedClickerItems = state.clickerItems
        .map(clicker => {
          if (clicker.getId() !== action.payload.id) {
            return clicker;
          }

          let updatedClicker: Clicker = new Clicker(clicker.id, clicker.name);
          updatedClicker.clicks = [...clicker.clicks, new Click()];
          return updatedClicker;
        });
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    case ClickerActions.NEW_CLICKER:
      updatedClickerItems = [...state.clickerItems, new Clicker(Utils.uid(), action.payload.name)];
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    case ClickerActions.REMOVE_CLICKER:
      updatedClickerItems = state.clickerItems.filter(item => item.id !== action.payload.id);
      rtn = Utils.assign(state, { clickerItems: updatedClickerItems });
      break;

    default:
      rtn = state;
  }
  return rtn;
}
