import { expect } from 'chai';
import StatusController from './status.controller';
const mocks = [
  () => key => `TRANSLATED_${key}`, // $filter
  { getLabelClass: state => `class-from-${state}` }, // labelchartsColorFactory
];
let ctrl;

describe('StatusController{}', () => {
  beforeEach(() => {
    ctrl = new StatusController(...mocks);
    ctrl.type = 'report';
    ctrl.state = 'current';
  });

  it('should be initialized', () => {
    ctrl.$onInit();
    expect(ctrl.label).equal('TRANSLATED_STATUS_REPORT_CURRENT');
    expect(ctrl.class).equal('class-from-current');
  });
});
