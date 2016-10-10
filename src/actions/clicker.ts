/* tslint:disable */
import { Action } from '@ngrx/store';
import { label } from '../utils/util';
import { Clicker } from '../models';

export const ClickerActionTypes = {
  DO_CLICK: label('[ClickerActions] Do Click'),
  LOAD: label('[ClickerActions] Load'),
  LOAD_SUCCESS: label('[ClickerActions] Load Success'),
  NEW_CLICKER: label('[ClickerActions] New Clicker'),
  REMOVE_CLICKER: label('[ClickerActions] Remove Clicker'),
}

export class DoClickAction implements Action {
  type = ClickerActionTypes.DO_CLICK;

  constructor(public payload: string) { } // id
}

export class LoadAction implements Action {
  type = ClickerActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ClickerActionTypes.LOAD_SUCCESS;

  constructor(public payload: Clicker[]) { }
}

export class NewClickerAction implements Action {
  type = ClickerActionTypes.NEW_CLICKER;

  constructor(public payload: string) { } // name
}

export class RemoveClickerAction implements Action {
  type = ClickerActionTypes.REMOVE_CLICKER;

  constructor(public payload: string) { } // id
}

export type ClickerActions =
  DoClickAction |
  LoadAction |
  LoadSuccessAction |
  NewClickerAction |
  RemoveClickerAction;

/*
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
*/
