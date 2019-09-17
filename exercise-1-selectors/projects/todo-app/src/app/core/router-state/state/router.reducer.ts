import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface State {
  router: RouterReducerState<any>;
}

export { routerReducer };
