import controller from './oauth-revoke.controller.js';
import template from './oauth-revoke.html';

export default {
  bindings: {
    service: '<',
  },
  controller,
  template,
};
