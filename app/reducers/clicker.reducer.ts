import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';

import { ClickerActions } from '../actions';
import { Clicker } from '../models';
import { assign } from '../utils';

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

/* tslint:disable: use-strict no-switch-case-fall-through */
export default function (
    state: ClickerItemState = initialState,
    action: Action): ClickerItemState {
    switch (action.type) {
        case ClickerActions.LOAD: {
            return assign(state, {
                loading: true,
            });
        }

        case ClickerActions.LOAD_SUCCESS: {
            const items: Clicker[] = action.payload;

            return {
                loaded: true,
                loading: false,
                // clickerItems: items.map(item => item),
                clickerItems: items,
            };
        }

        default: {
            return state;
        }
    }
}
