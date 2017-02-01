import { expect } from 'chai';
import AvatarController from './avatar.controller';
let ctrl;

describe('AvatarController()', () => {
  it('should be initialized if no avatar', () => {
    ctrl = new AvatarController();
    ctrl.$onInit();
    expect(ctrl.avatarUrl).equal('img/default_profile_small.png');
  });

  it('should be initialized if valid avatar', () => {
    ctrl = new AvatarController();
    ctrl.avatarUrl = 'fakeAvatarUrl';
    ctrl.$onInit();
    expect(ctrl.avatarUrl).equal('fakeAvatarUrl');
  });
});
