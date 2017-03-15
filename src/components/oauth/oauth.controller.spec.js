/* eslint-disable max-nested-callbacks */
import { expect } from 'chai';
import OauthController from './oauth.controller';
const mocks = [
  { location: { href: 'init/page' } }, // $window
];
let ctrl;

describe('OauthController{}', () => {
  beforeEach(() => {
    ctrl = new OauthController(...mocks);
    ctrl.endpoint = 'api/v3/oauth/google';
    ctrl.service = 'google';
    ctrl.label = 'label';
  });

  describe('methods', () => {
    describe('goToAuthPage()', () => {
      context('samePage redirection', () => {
        it('should set the url', () => {
          ctrl.redirection = 'samePage';
          ctrl.goToAuthPage();
          expect(ctrl.$window.location.href)
            .equal('api/v3/oauth/google?url=init%2Fpage');
        });
      });

      context('not samePage redirection', () => {
        it('should set the url', () => {
          ctrl.redirection = 'nooo';
          ctrl.goToAuthPage();
          expect(ctrl.$window.location.href)
            .equal('api/v3/oauth/google');
        });
      });
    });
  });
});
