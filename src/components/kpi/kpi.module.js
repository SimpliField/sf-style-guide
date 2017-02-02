// import angular from 'angular';
import kpiConfig from './kpi.component';

const Kpi = angular
  .module('simplifield.components.kpi', [])
  .component('sfKpi', kpiConfig)
  .name;

export { Kpi };
