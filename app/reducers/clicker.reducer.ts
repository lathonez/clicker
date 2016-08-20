import { Action } from '@ngrx/store';
import { ClickerActions } from '../actions';
import { Click, Clicker } from '../models';
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

        case ClickerActions.DO_CLICK: {
            let updatedClickerItems: Clicker[] = state.clickerItems
                .map(clicker => {
                    if (clicker.getId() === action.payload.id) {
                        let updatedClicker: Clicker;
                        // updatedClicker = assign(clicker, {});
                        updatedClicker = new Clicker(clicker.id, clicker.name);
                        updatedClicker.clicks = [...clicker.clicks, new Click()];
                        return updatedClicker;
                    } else {
                        return clicker;
                    }
                }
                );
            return assign(state, { clickerItems: updatedClickerItems });
        }

        case ClickerActions.NEW_CLICKER: {
            const id: string = uid();
            const clicker: Clicker = new Clicker(id, action.payload.name);
            const updatedClickerItems: Clicker[] = [...state.clickerItems, clicker];

            return assign(state, { clickerItems: updatedClickerItems });
        }

        case ClickerActions.REMOVE_CLICKER: {
            let updatedClickerItems: Clicker[] = state.clickerItems.filter(item => item.id !== action.payload.id);
            return assign(state, { clickerItems: updatedClickerItems });
        }

        default: {
            return state;
        }
    }
}

function uid(): string {
    return Math.random().toString(35).substr(2, 10);
}
