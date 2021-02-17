import { reducer, initialState } from './todo.reducer';
import {
  editTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo,
  updateTodo,
  cancelEditTodo,
  addTodoWithId
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
      const action = addTodoWithId('Test');

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
    it('should remove todo', () => {
      const id = Object.keys(initialState.items)[0];
      const action = removeTodo({ id });

      const result = reducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(3);
    });
  });

  describe('remove done todos action', () => {
    it('should remove done todos', () => {
      const action = removeDoneTodos();

      const result = reducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(3);
    });
  });

  describe('set todo filter', () => {
    it('should set the filter', () => {
      const action = filterTodos({ filter: 'ACTIVE' });

      const result = reducer(initialState, action);

      expect(result.todoFilter).toBe('ACTIVE');
    });
  });

  describe('set edited todo id', () => {
    it('should set the edited todo id', () => {
      const id = Object.keys(initialState.items)[0];
      const action = editTodo({ id });

      const result = reducer(initialState, action);

      expect(result.editedTodoId).toBe(id);
    });
  });

  describe('unset edit todo id', () => {
    it('should set the edited todo id', () => {
      const action = cancelEditTodo();

      const result = reducer(initialState, action);

      expect(result.editedTodoId).toBe(null);
    });
  });

  describe('update todo', () => {
    it('should update todo', () => {
      const id = Object.keys(initialState.items)[0];
      const action = updateTodo({
        todo: { id, title: 'Updated', done: false }
      });

      const result = reducer(initialState, action);

      expect(result.editedTodoId).toBe(null);
      expect(result.items[id].title).toBe('Updated');
      expect(result.items[id].done).toBe(false);
    });
  });
});
