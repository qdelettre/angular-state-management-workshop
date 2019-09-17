import { addTodoWithId } from './todo.actions';

describe('Todo Actions', () => {
  describe('add todo with ID', () => {
    it('shoudl create action with generated ID', () => {
      const action = addTodoWithId('Test');
      expect(action.title).toBe('Test');
      expect(typeof action.id).toBe('string');
    });
  });
});
