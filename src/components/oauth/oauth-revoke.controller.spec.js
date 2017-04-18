/* eslint-disable max-nested-callbacks */
import { expect } from 'chai';
import sinon from 'sinon';
import q from 'q';
import OauthRevokeController from './oauth-revoke.controller';

const revokeOAuth = sinon.stub().returns(q.when());
const go = sinon.stub();
const mocks = [
  () => () => 'TRANSLATED_KEY', // $filter
  { revokeOAuth }, // profileFactory
  { go }, // $state
];
let ctrl;

describe('OauthRevokeController{}', () => {
  beforeEach(() => {
    ctrl = new OauthRevokeController(...mocks);
    ctrl.service = 'google';
  });

  describe('methods', () => {
    describe('revokeToken()', () => {
      it('should make the good calls', () =>
        ctrl.revokeToken().then(() => {
          expect(revokeOAuth.calledWith('google'));
          expect(go.calledWith('index.dashboard', { reload: true }));
        })
      );
    });
  });
});
