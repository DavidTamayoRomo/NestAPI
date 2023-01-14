import { UserDto } from './organization.dto';

describe('UserDto', () => {
  it('should be defined', () => {
    expect(new UserDto()).toBeDefined();
  });
});
