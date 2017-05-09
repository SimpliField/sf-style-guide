export default class OauthController {
  static get $inject() {
    return ['$window'];
  }

  constructor($window) {
    Object.assign(this, { $window });
  }

  goToAuthPage() {
    this.$window.location.href = [
      this.endpoint,
      this.redirection ?
        `?url=${encodeURIComponent(
          'samePage' === this.redirection ? // if redirection is not set callbackUrl is the page origin page
            this.$window.location.href :
            this.redirection
        )}` :
        '',
    ].join('');
  }
}
