import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Clicker } from '../models';

@Injectable()
export class ClickerActions {
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
}
