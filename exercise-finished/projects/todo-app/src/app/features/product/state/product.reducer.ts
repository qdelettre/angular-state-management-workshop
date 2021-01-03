import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Product } from './product.model';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export interface State extends EntityState<Product> {
  editedProductId: number | null;
  loading: boolean;
  error: string | null;
}

export function selectProductId(product: Product): number {
  return product.id;
}

export function sortByProductName(p1: Product, p2: Product): number {
  return p1.name.localeCompare(p2.name);
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId,
  sortComparer: sortByProductName
});

export const initialState: State = adapter.getInitialState({
  editedProductId: null,
  loading: false,
  error: null
});

const productReducer = createReducer(
  initialState,

  on(ProductActions.editProduct, (state, { id }) => ({
    ...state,
    editedProductId: id
  })),

  on(ProductActions.editProductCancel, state => ({
    ...state,
    editedProductId: null
  })),

  on(
    ProductActions.loadProducts,
    ProductActions.createProduct,
    ProductActions.updateProduct,
    ProductActions.removeProduct,
    state => ({
      ...state,
      editedProductId: null,
      loading: true,
      error: null
    })
  ),

  on(
    ProductActions.loadProductsFailure,
    ProductActions.createProductFailure,
    ProductActions.updateProductFailure,
    ProductActions.removeProductFailure,
    (state, { error }) => ({
      ...state,
      editedProductId: null,
      loading: false,
      error
    })
  ),

  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...adapter.setAll(products, state),
    editedProductId: null,
    loading: false,
    error: null
  })),

  on(ProductActions.createProductSuccess, (state, { product }) => ({
    ...adapter.addOne(product, state),
    editedProductId: null,
    loading: false,
    error: null
  })),

  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...adapter.updateOne(product, state),
    editedProductId: null,
    loading: false,
    error: null
  })),

  on(ProductActions.removeProductSuccess, (state, { id }) => ({
    ...adapter.removeOne(id, state),
    editedProductId: null,
    loading: false,
    error: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}
