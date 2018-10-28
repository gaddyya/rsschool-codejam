const chai = require('chai');

const sum = require('../src/sum.js');
const make = require('../src/make.js');
const recursion = require('../src/recursion.js');

describe('sum', () => {
  it('Expected []', () => {
    chai.expect(sum([])).to.deep.equal([]);
  });
  it('Expected [0]', () => {
    chai.expect(sum([5])).to.deep.equal([0]);
  });
  it('Expected [2, 1]', () => {
    chai.expect(sum([1, 2])).to.deep.equal([2, 1]);
  });
  it('Expected [8, 7, 6, 9]', () => {
    chai.expect(sum([2, 3, 4, 1])).to.deep.equal([8, 7, 6, 9]);
  });
  it('Expected [54, 53, 52, 51, 50, 49, 48, 47, 46, 45]', () => {
    chai.expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .to.deep.equal([54, 53, 52, 51, 50, 49, 48, 47, 46, 45]);
  });
  it('Expected [-3, 8, 17, 8, -3, 8, 17, 6, -3, 8]', () => {
    chai.expect(sum([10, -1, -10, -1, 10, -1, -10, 1, 10, -1]))
      .to.deep.equal([-3, 8, 17, 8, -3, 8, 17, 6, -3, 8]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const max = (a, b) => Math.max(a, b);

  it('Expected 777', () => {
    chai.expect(make(15)(34, 21, 666)(41)(sum)).equal(777);
  });

  it('Expected 547', () => {
    chai.expect(make(666)(34, 21, 23)(41)(minus)).equal(547);
  });

  it('Expected 3', () => {
    chai.expect(make(1)(-1)(2, -2)(3, -3, 3)(4, -4, 4, -4)(sum)).equal(3);
  });

  it('Expected 120', () => {
    chai.expect(make(1)(2)(3)(4)(5)(multiply)).equal(120);
  });

  it('Expected 443093', () => {
    chai.expect(make(-100)(223, 4578)(303945, 0, 434, 54)(4, 443093)(5, 111)(max)).equal(443093);
  });
});
