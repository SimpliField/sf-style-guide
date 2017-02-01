import angular from 'angular';
import avatarComponent from './avatar.component';

const Avatar = angular
  .module('simplifield.components.avatar', [])
  .component('sfAvatar', avatarComponent)
  .name;

export { Avatar };
