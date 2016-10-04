import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Clicker } from '../models';

@Injectable()
export class ClickerActions {
  public static DO_CLICK: string = '[ClickerActions] Do Click';
  public doClick(id: string): Action {
    return {
      type: ClickerActions.DO_CLICK,
      payload: { id: id },
    };
  }

  public static LOAD: string = '[ClickerActions] Load';
  public load(): Action {
    return {
      type: ClickerActions.LOAD,
    };
  }

  public static LOAD_SUCCESS: string  = '[ClickerActions] Load Success';
  public loadSuccess(data: Clicker[]): Action {
    return {
      type: ClickerActions.LOAD_SUCCESS,
      payload: data,
    };
  }

  public static NEW_CLICKER: string = '[ClickerActions] New Clicker';
  public newClicker(name: string): Action {
    return {
      type: ClickerActions.NEW_CLICKER,
      payload: { name: name },
    };
  }

  public static REMOVE_CLICKER: string = '[ClickerActions] Remove Clicker';
  public removeClicker(id: string): Action {
    return {
      type: ClickerActions.REMOVE_CLICKER,
      payload: { id: id },
    };
  }
}
