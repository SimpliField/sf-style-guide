const LABELKEYS = {
  campaign: 'STATUS_CAMPAIGN_',
  report: 'STATUS_REPORT_',
};

export default class StatusController {
  static get $inject() {
    return ['$filter', 'labelchartsColorFactory'];
  }

  constructor($filter, labelchartsColorFactory) {
    Object.assign(this, { $filter, labelchartsColorFactory });
  }

  $onInit() {
    this.label = this.$filter('translate')(LABELKEYS[this.type] + this.state.toUpperCase());
    this.class = this.labelchartsColorFactory.getLabelClass(this.state);
  }
}
