import template from './status.html';
import controller from './status.controller';

export default {
  template,
  controller,
  bindings: {
    type: '<',
    state: '<',
  },
};
