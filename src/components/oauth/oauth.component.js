import controller from './oauth.controller.js';
import template from './oauth.html';

export default {
  bindings: {
    service: '@',
    label: '@',
    redirection: '=',
  },
  controller,
  template,
};
