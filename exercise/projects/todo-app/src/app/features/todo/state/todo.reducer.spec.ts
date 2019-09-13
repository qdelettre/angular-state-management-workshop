import { reducer, initialState } from './todo.reducer';
import {
  addTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo
} from './todo.actions';

describe('Todo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('add todo action', () => {
    it('should add todo', () => {
      const action = addTodo({ title: 'Test' });

      const result = reducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(5);
      expect(result.items[ids[4]]).toEqual({
        id: ids[4],
        title: 'Test',
        done: false
      });
    });
  });

  describe('toggle todo action', () => {
    it('should toggle todo', () => {
      const id = Object.keys(initialState.items)[1];
      const action = toggleTodo({ id });

      const result = reducer(initialState, action);

      expect(result.items[id]).toEqual({ id, title: 'Learn NgRx', done: true });
    });
  });

  describe('remove todo action', () => {
    it('should toggle todo', () => {
      const id = Object.keys(initialState.items)[0];
      const action = removeTodo({ id });

      const result = reducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(3);
    });
  });

  describe('set todo filter', () => {
    it('should remove all done todos', () => {
      const action = filterTodos({ filter: 'ACTIVE' });

      const result = reducer(initialState, action);

      expect(result.todoFilter).toBe('ACTIVE');
    });
  });
});
