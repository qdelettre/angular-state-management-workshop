import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectQueryParamId } from '../../../core/router-state/state/router.selectors';

import { productFeatureKey, State, adapter } from './product.reducer';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectProductFeature = createFeatureSelector<State>(
  productFeatureKey
);

export const selectProductItems = createSelector(
  selectProductFeature,
  selectAll
);

export const selectProductEntities = createSelector(
  selectProductFeature,
  selectEntities
);

export const selectProductView = createSelector(
  selectProductFeature,
  selectProductItems,
  selectProductEntities,
  selectQueryParamId, // example of how to get router state, try adding ?id=1 to the url
  (state, products, productEntities, id) => ({
    ...state,
    products,
    editedProduct: productEntities[state.editedProductId || id]
  })
);
