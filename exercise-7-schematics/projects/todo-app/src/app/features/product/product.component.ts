import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from './state/product.model';
import {
  selectEditedProduct,
  selectProductItems,
  selectProductError,
  selectProductLoading
} from './state/product.selectors';
import {
  removeProduct,
  loadProducts,
  createProduct,
  updateProduct,
  editProduct,
  editProductCancel
} from './state/product.actions';

@Component({
  selector: 'todo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading: Observable<boolean>;
  error: Observable<string>;
  products: Observable<Product[]>;
  productsEditedProduct: Observable<Partial<Product> | undefined>;

  newProduct: Partial<Product> | null = null;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.error = this.store.pipe(select(selectProductError));
    this.loading = this.store.pipe(select(selectProductLoading));
    this.products = this.store.pipe(select(selectProductItems));
    this.productsEditedProduct = this.store.pipe(select(selectEditedProduct));

    this.store.dispatch(loadProducts());
  }

  createNewProduct() {
    this.store.dispatch(editProductCancel());
    this.newProduct = {};
  }

  createNewProductSave(product: Partial<Product>) {
    this.store.dispatch(createProduct({ product }));
    this.newProduct = null;
  }

  createNewProductCancel() {
    this.newProduct = null;
  }

  editProduct(id: number) {
    this.newProduct = null;
    this.store.dispatch(editProduct({ id }));
  }

  editProductSave(product: Product) {
    this.store.dispatch(updateProduct({ product }));
  }

  editProductCancel() {
    this.store.dispatch(editProductCancel());
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
