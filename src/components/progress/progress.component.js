import template from './progress.html';
import controller from './progress.controller';

export default {
  template,
  controller,
  bindings: {
    val: '=',
    max: '<',
  },
};
