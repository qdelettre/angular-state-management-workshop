import { reducer, initialState } from './product.reducer';
import { createProductSuccess, loadProductsSuccess } from './product.actions';

describe('Product Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('load products success', () => {
    it('should return state with loaded products', () => {
      const action = loadProductsSuccess({
        products: [
          { id: 1, name: 'product 1', description: 'description 1 ' },
          { id: 2, name: 'product 2', description: 'description 2 ' }
        ]
      });

      const result = reducer(initialState, action);

      expect(result.ids.length).toBe(2);
      expect(Object.values(result.entities).length).toBe(2);
    });
  });

  describe('create product success', () => {
    it('should return state with loaded products', () => {
      const action = createProductSuccess({
        product: { id: 1, name: 'product 1', description: 'description 1' }
      });

      const result = reducer(initialState, action);

      expect(result.ids.length).toBe(1);
      expect(Object.values(result.entities).length).toBe(1);
      expect(result.entities[1].name).toBe('product 1');
      expect(result.entities[1].description).toBe('description 1');
    });
  });
});
