import template from './avatar.html';
import controller from './avatar.controller';

export default {
  bindings: {
    avatarUrl: '<',
    avatarSize: '@',
  },
  template,
  controller,
};
