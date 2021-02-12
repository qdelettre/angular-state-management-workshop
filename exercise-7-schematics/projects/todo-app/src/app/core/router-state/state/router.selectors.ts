import { createFeatureSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

import { routerFeatureKey, State } from './router.reducer';

export const selectRouter = createFeatureSelector<
  State,
  RouterReducerState<any>
>(routerFeatureKey);

const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);

export const selectRouteId = selectRouteParam('id');
export const selectStatus = selectQueryParam('status');
