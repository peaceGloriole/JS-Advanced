import { mathEnforcer } from "../04.MathEnforcer/mathEnforcer.js";
import { expect } from 'chai';

describe(`addFive test`, () => {
  it(`should return undefined if para is NOT a number`, () => {
    const result = mathEnforcer.addFive(`1`);
    expect(result).to.be.undefined;
  });
  it(`should work when para is correct`, () => {
    const result = mathEnforcer.addFive(5);
    expect(result).to.equal(10);
  });
  it(`should work with negative numbers`, () => {
    const result = mathEnforcer.addFive(-5);
    expect(result).to.equal(0);
  });
  it(`should work with floating numbers`, () => {
    const result = mathEnforcer.addFive(2.2);
    expect(result).to.equal(7.2);
  });
  it(`should work with negative floating numbers`, () => {
    const result = mathEnforcer.addFive(-2.2);
    expect(result).to.equal(2.8);
  });
});
describe(`subtractTen test`, () => {
  it(`should return undefined if para is NOT a number`, () => {
    const result = mathEnforcer.subtractTen(`1`);
    expect(result).to.be.undefined;
  });
  it(`should work when para is correct`, () => {
    const result = mathEnforcer.subtractTen(20);
    expect(result).to.equal(10);
  });
  it(`should work with floating numbers`, () => {
    const result = mathEnforcer.subtractTen(10.2);
    expect(result).to.be.closeTo(0.2, 0.1);
  });
});
describe(`sum test`, () => {
  it(`should return undefined if one of para is undefined`, () => {
    const result = mathEnforcer.sum(`test`, 5);
    expect(result).to.be.undefined;
  });
  it(`should return undefined if one of para is undefined`, () => {
    const result = mathEnforcer.sum(5, `test`);
    expect(result).to.be.undefined;
  });
  it(`should return undefined if one of para is undefined`, () => {
    const result = mathEnforcer.sum(`test`, `test`);
    expect(result).to.be.undefined;
  });
  it(`should work if both para are correct`, () => {
    const result = mathEnforcer.sum(10, 10);
    expect(result).to.equal(20);
  });
  it(`should work with floating num`, () => {
    const result = mathEnforcer.sum(10.2, 10);
    expect(result).to.be.closeTo(20.2, 0.1);
  });
  it(`should work with negative floating num`, () => {
    const result = mathEnforcer.sum(-5.2, 10);
    expect(result).to.be.closeTo(4.8, 0.1);
  });
});