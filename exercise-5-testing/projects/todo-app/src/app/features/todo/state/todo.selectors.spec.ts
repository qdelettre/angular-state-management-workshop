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
      // TODO 4: implement "selectTodos" selector test (remember that selector exposes its function in "projector" property)
      // test if result contains desired data (eg how many todos were selected based on provided params)
      // projector might not get proper IDE type support depending on editor
      // in that case, please check what you pass into selector in its implementation to know what test data you have to create
      // feel free to use "initialState" for all the cases when you need to pass in feature state
    });

    it('returns done todos with DONE filter', () => {
      // TODO 5: implement all selector tests
    });

    it('returns active todos with ACTIVE filter', () => {});
  });

  describe('selectTodosCount', () => {
    it('returns count of todos', () => {});
  });

  describe('selectTodoFilter', () => {
    it('returns filter value', () => {});
  });

  describe('selectEditedTodo', () => {
    it('returns edited todo object', () => {});
  });
});
