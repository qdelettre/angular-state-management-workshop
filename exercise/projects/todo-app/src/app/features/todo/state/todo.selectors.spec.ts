import { selectTodos } from './todo.selectors';
import { initialState } from './todo.reducer';

describe('Todo selectors', () => {
  describe('selectTodos', () => {
    it('returns all todos with ALL filter', () => {
      const result = selectTodos.projector(initialState, 'ALL');
      expect(result.length).toBe(4);
      expect(result[0].title).toBe('Sign up for NgRx workshop');
      expect(result[0].done).toBe(true);
    });

    it('returns done todos with DONE filter', () => {
      const result = selectTodos.projector(initialState, 'DONE');
      expect(result.length).toBe(1);
      expect(result[0].title).toBe('Sign up for NgRx workshop');
      expect(result[0].done).toBe(true);
    });

    it('returns active todos with ACTIVE filter', () => {
      const result = selectTodos.projector(initialState, 'ACTIVE');
      expect(result.length).toBe(3);
      expect(result[0].title).toBe('Learn NgRx');
      expect(result[0].done).toBe(false);
    });
  });
});
