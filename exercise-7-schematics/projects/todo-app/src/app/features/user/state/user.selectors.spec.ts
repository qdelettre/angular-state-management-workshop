import { selectUsers } from './user.selectors';

describe('User Selectors', () => {
  describe('selectUsers', () => {
    it('should select users', () => {
      const result = selectUsers.projector({
        items: { 1: { id: 1, username: 'tester' } }
      });
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
      expect(result[0].username).toBe('tester');
    });
  });
});
