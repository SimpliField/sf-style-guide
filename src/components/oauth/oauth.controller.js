export default class OauthController {
  static get $inject() {
    return ['$window'];
  }

  constructor($window) {
    Object.assign(this, { $window });
  }

  goToAuthPage() {
    // if redirection is not set callbackUrl is the page origin page
    const callbackUrl = 'samePage' === this.redirection ?
      `?url=${encodeURIComponent(this.$window.location.href)}` : '';

    this.$window.location.href = `api/v3/oauth/${this.service}${callbackUrl}`;
  }
}
