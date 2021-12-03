import { selectUserView } from './user.selectors';

describe('User Selectors', () => {
  describe('selectUsers', () => {
    it('should select users', () => {
      const result = selectUserView.projector({
        items: { 1: { id: 1, username: 'tester' } }
      });
      expect(result.users.length).toBe(1);
      expect(result.users[0].id).toBe(1);
      expect(result.users[0].username).toBe('tester');
    });
  });
});
