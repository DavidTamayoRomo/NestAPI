import { UserEntity } from './organization.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new UserEntity()).toBeDefined();
  });
});
