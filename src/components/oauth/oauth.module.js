// import angular from 'angular';
import oauthConfig from './oauth.component';
import oauthRevokeConfig from './oauth-revoke.component';

const Oauth = angular
  .module('simplifield.components.oauth', [])
  .component('sfOauth', oauthConfig)
  .component('sfOauthRevoke', oauthRevokeConfig)
  .name;

export { Oauth };
