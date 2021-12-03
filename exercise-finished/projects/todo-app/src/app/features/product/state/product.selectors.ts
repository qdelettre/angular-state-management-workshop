import { createFeatureSelector, createSelector } from '@ngrx/store';

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
  (state, products, productEntities) => ({
    ...state,
    products,
    editedProduct: productEntities[state.editedProductId]
  })
);
