import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from './product.model';

export const editProduct = createAction(
  '[Product Page] Edit Product',
  props<{ id: number }>()
);

export const editProductCancel = createAction(
  '[Product Page] Edit Product Cancel '
);

export const loadProducts = createAction('[Product Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Load Product Failure',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[Product Page] Create Product',
  props<{ product: Partial<Product> }>()
);

export const createProductSuccess = createAction(
  '[Product API] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product API] Create Product Failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product Page] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product API] Update Product Success',
  props<{ product: Update<Product> }>()
);

export const updateProductFailure = createAction(
  '[Product API] Update Product Failure',
  props<{ error: string }>()
);

export const removeProduct = createAction(
  '[Product Page] Remove Product',
  props<{ id: number }>()
);

export const removeProductSuccess = createAction(
  '[Product API] Remove Product Success',
  props<{ id: number }>()
);

export const removeProductFailure = createAction(
  '[Product API] Remove Product Failure',
  props<{ error: string }>()
);
