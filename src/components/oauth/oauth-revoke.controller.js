export default class OauthRevokeController {
  /* @ngInject */
  constructor($filter, profileFactory, $state) {
    Object.assign(this, { profileFactory, $state });
    this.label = $filter('translate')('OAUTH_REVOKE');
  }

  revokeToken() {
    return this.profileFactory.revokeOAuth(this.service)
      .then(() => {
        this.$state.go('index.dashboard', { reload: true });
      });
      // this is temporary, I did not find a way to reload
      // the integrations page properly.
  }
}
