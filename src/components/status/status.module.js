import angular from 'angular';
import progressConfig from './status.component';

const Status = angular
  .module('simplifield.components.status', [])
  .component('sfStatus', progressConfig)
  .name;

export { Status };
