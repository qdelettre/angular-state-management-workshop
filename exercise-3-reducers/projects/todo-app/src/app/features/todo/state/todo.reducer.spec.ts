import { todoReducer, initialState } from './todo.reducer';
import { TodoPageEvents } from './todo.actions';

describe('Todo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = todoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('add todo action', () => {
    it('should add todo', () => {
      const action = TodoPageEvents.addTodoWithIDTriggered('Test');

      const result = todoReducer(initialState, action);

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
      const action = TodoPageEvents.toggleTodoTriggered({ id });

      const result = todoReducer(initialState, action);

      expect(result.items[id]).toEqual({ id, title: 'Learn NgRx', done: true });
    });
  });

  describe('remove todo action', () => {
    it('should remove todo', () => {
      const id = Object.keys(initialState.items)[0];
      const action = TodoPageEvents.removeTodoTriggered({ id });

      const result = todoReducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(3);
    });
  });

  describe('remove done todos action', () => {
    it('should remove done todos', () => {
      const action = TodoPageEvents.removeDoneTodosTriggered();

      const result = todoReducer(initialState, action);

      const ids = Object.keys(result.items);
      expect(ids.length).toBe(3);
    });
  });

  describe('set todo filter', () => {
    it('should set the filter', () => {
      const action = TodoPageEvents.todosFilterChanged({
        todoFilter: 'ACTIVE'
      });

      const result = todoReducer(initialState, action);

      expect(result.todoFilter).toBe('ACTIVE');
    });
  });

  describe('set edited todo id', () => {
    it('should set the edited todo id', () => {
      const id = Object.keys(initialState.items)[0];
      const action = TodoPageEvents.editTodoTriggered({ id });

      const result = todoReducer(initialState, action);

      expect(result.editedTodoId).toBe(id);
    });
  });

  describe('unset edit todo id', () => {
    it('should set the edited todo id', () => {
      const action = TodoPageEvents.cancelEditTodoTriggered();

      const result = todoReducer(initialState, action);

      expect(result.editedTodoId).toBe(null);
    });
  });

  describe('update todo', () => {
    it('should update todo', () => {
      const id = Object.keys(initialState.items)[0];
      const action = TodoPageEvents.updateTodoTriggered({
        todo: { id, title: 'Updated', done: false }
      });

      const result = todoReducer(initialState, action);

      expect(result.editedTodoId).toBe(null);
      expect(result.items[id].title).toBe('Updated');
      expect(result.items[id].done).toBe(false);
    });
  });
});
