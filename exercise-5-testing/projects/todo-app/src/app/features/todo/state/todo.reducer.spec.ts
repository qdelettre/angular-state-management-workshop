import uuid from 'uuid/v4';
import { reducer, State } from './todo.reducer';
import {
  addTodo,
  editTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo,
  updateTodo,
  cancelEditTodo,
  addTodoWithId
} from './todo.actions';

const id1 = uuid();
const id2 = uuid();
const id3 = uuid();
const id4 = uuid();

export const MOCK_STATE: State = {
  items: {
    [id1]: { id: id1, title: 'Sign up for NgRx workshop', done: true },
    [id2]: { id: id2, title: 'Learn NgRx', done: false },
    [id3]: { id: id3, title: 'Use NgRx in your apps', done: false },
    [id4]: {
      id: id4,
      title: 'Implement amazing features for users',
      done: false
    }
  },
  editedTodoId: null,
  todoFilter: 'ALL'
};

describe('Todo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(MOCK_STATE, action);

      expect(result).toBe(MOCK_STATE);
    });
  });

  describe('add todo action', () => {
    it('should add todo', () => {
      // TODO 2: add reducer test for handler that handles "addTodoWithId" action by creating action and applying it to reducer
      // resulting state should contain new todo with specified title (get inspiration from the first test)
    });
  });

  describe('toggle todo action', () => {
    it('should toggle todo', () => {
      // TODO 3: implement all reducer tests
    });
  });

  describe('remove todo action', () => {
    it('should remove todo', () => {});
  });

  describe('remove done todos action', () => {
    it('should remove done todos', () => {});
  });

  describe('set todo filter', () => {
    it('should set the filter', () => {});
  });

  describe('set edited todo id', () => {
    it('should set the edited todo id', () => {});
  });

  describe('unset edit todo id', () => {
    it('should set the edited todo id', () => {});
  });

  describe('update todo', () => {
    it('should update todo', () => {});
  });
});
