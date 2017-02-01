const PICTUREDEFAULT = 'img/default_profile_small.png';

export default class AvatarController {
  $onInit() {
    this.avatarUrl = this.avatarUrl || PICTUREDEFAULT;
  }
}
