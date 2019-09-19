import { reducer, initialState } from './todo.reducer';
import {
  addTodo,
  editTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo,
  updateTodo,
  cancelEditTodo
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

      // TODO 2: add reducer test for handler that handles "addTodo" action by creating action and applying it to reducer
      // resulting state should contain new todo with specified title



    });
  });

  describe('toggle todo action', () => {
    it('should toggle todo', () => {

      // TODO 3: implement all reducer tests

    });
  });

  describe('remove todo action', () => {
    it('should remove todo', () => {

    });
  });

  describe('remove done todos action', () => {
    it('should remove done todos', () => {


    });
  });

  describe('set todo filter', () => {
    it('should set the filter', () => {


    });
  });

  describe('set edited todo id', () => {
    it('should set the edited todo id', () => {


    });
  });

  describe('unset edit todo id', () => {
    it('should set the edited todo id', () => {


    });
  });

  describe('update todo', () => {
    it('should update todo', () => {


    });
  });
});
