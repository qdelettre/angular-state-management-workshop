import { TodoPageEvents } from './todo.actions';

describe('Todo Actions', () => {
  describe('add todo with ID', () => {
    it('shoudl create action with generated ID', () => {
      const action = TodoPageEvents.addTodoWithIDTriggered('Test');
      expect(action.title).toBe('Test');
      expect(typeof action.id).toBe('string');
    });
  });
});
