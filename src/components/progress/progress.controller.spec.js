/* eslint-disable no-magic-numbers */
import { expect } from 'chai';
import ProgressController, { getClass } from './progress.controller';
let ctrl;

describe('ProgressController{}', () => {
  beforeEach(() => {
    ctrl = new ProgressController();
    ctrl.val = 50;
    ctrl.max = 100;
  });

  it('should be initialized: default', () => {
    delete ctrl.val;
    delete ctrl.max;
    ctrl.$onInit();
    expect(ctrl.val).equal(0);
    expect(ctrl.progressClass).equal('beggining');
  });

  it('should be initialized: normal', () => {
    ctrl.$onInit();
    expect(ctrl.val).equal(50);
    expect(ctrl.progressClass).equal('half');
  });
});

describe('getClass(persent)', () => {
  it('should return the corresponding string', () => {
    expect(getClass()).equal('beggining');
    expect(getClass(0)).equal('beggining');
    expect(getClass(0.5)).equal('half');
    expect(getClass(1)).equal('full');
  });
});
