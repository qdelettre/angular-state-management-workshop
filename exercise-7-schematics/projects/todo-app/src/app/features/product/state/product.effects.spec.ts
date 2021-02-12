import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { ProductEffects } from './product.effects';
import { ProductIntegrationService } from '../services/product-integration.service';
import { loadProducts, loadProductsSuccess } from './product.actions';

describe('ProductEffects', () => {
  let scheduler: TestScheduler;
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let productIntegrationServiceMock: jest.Mocked<ProductIntegrationService>;

  beforeEach(() => {
    productIntegrationServiceMock = createSpyObj(ProductIntegrationService, [
      'load'
    ]);
    scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toStrictEqual(expected)
    );
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        {
          provide: ProductIntegrationService,
          useValue: productIntegrationServiceMock
        }
      ]
    });

    effects = TestBed.inject<ProductEffects>(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('loads products', () => {
    scheduler.run(({ expectObservable, hot, cold }) => {
      actions$ = hot('--a-', { a: loadProducts() });

      productIntegrationServiceMock.load.mockReturnValue(
        cold('--a|', { a: [] })
      );

      expectObservable(effects.loadProducts$).toBe('----a', {
        a: loadProductsSuccess({ products: [] })
      });
    });
  });
});
