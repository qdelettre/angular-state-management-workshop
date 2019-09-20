import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export interface State {

}

export const initialState: State = {

};

const productReducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state, action) => state),
  on(ProductActions.loadProductsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}
