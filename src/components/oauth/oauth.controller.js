export default class OauthController {
  static get $inject() {
    return ['$window'];
  }

  constructor($window) {
    Object.assign(this, { $window });
  }

  goToAuthPage() {
    this.$window.location.href = [
      endpoint,
      'samePage' === this.redirection ? // if redirection is not set callbackUrl is the page origin page
        `?url=${encodeURIComponent(this.$window.location.href)}` : ''
    ].join('');
  }
}
