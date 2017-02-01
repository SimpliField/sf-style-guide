import angular from 'angular';
import progressConfig from './progress.component';

const Progress = angular
  .module('simplifield.components.progress', [])
  .component('sfProgress', progressConfig)
  .name;

export { Progress };
