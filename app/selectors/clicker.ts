import { Observable }                 from 'rxjs/Observable';
import { compose }                    from '@ngrx/core/compose';
import { Clicker }                    from '../models';
import { AppState, ClickerItemState } from '../reducers';

export function getClickerItemState(): Function {
  'use strict';
  return (state$: Observable<AppState>) => state$
    .select(s => s.clickers);
}

export function getLoaded(): Function {
  'use strict';
  return compose(_getLoaded(), getClickerItemState());
}

export function getLoading(): (selector: Observable<AppState>) => Observable<boolean> {
  'use strict';
  return compose(_getLoading(), getClickerItemState());
}

export function getClickerItems(): (selector: Observable<AppState>) => Observable<Clicker[]> {
  'use strict';
  return compose(_getClickerItems(), getClickerItemState());
}

function _getLoaded(): Function {
  'use strict';
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.loaded);
}

function _getLoading(): Function {
  'use strict';
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.loading);
}

function _getClickerItems(): Function {
  'use strict';
  return (state$: Observable<ClickerItemState>) => state$
    .select(s => s.clickerItems);
}
