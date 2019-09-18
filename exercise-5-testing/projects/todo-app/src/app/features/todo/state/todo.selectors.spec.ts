import {
  selectEditedTodo,
  selectTodoFilter,
  selectTodos,
  selectTodosCount
} from './todo.selectors';
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

  describe('selectTodosCount', () => {
    it('returns count of todos', () => {
      const result = selectTodosCount.projector([]);
      expect(result).toBe(0);
    });
  });

  describe('selectTodoFilter', () => {
    it('returns filter value', () => {
      const result = selectTodoFilter.projector(initialState);
      expect(result).toBe('ALL');
    });
  });

  describe('selectEditedTodo', () => {
    it('returns edited todo object', () => {
      const result = selectEditedTodo.projector({
        items: { abc: { id: 'abc', title: 'Test', done: false } },
        editedTodoId: 'abc'
      });
      expect(result.id).toBe('abc');
      expect(result.title).toBe('Test');
      expect(result.done).toBe(false);
    });
  });
});
