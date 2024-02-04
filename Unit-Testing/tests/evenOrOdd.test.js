import { isOddOrEven } from "../02.evenOrOdd/evenOrOdd.js";
import { expect } from 'chai';

describe(`Unit Test for isOddOrEven()`, () => {
  it(`should return "even" for a string with even length`, () => {
    const result = isOddOrEven('even');
    expect(result).to.equal('even');
  });

  it(`should return "odd" for a string with odd length`, () => {
    const result = isOddOrEven('odd');
    expect(result).to.equal('odd');
  });

  it(`should return undefined for a non-string input`, () => {
    const result = isOddOrEven(123);
    expect(result).to.be.undefined;
  });

  it(`should return undefined for an undefined input`, () => {
    const result = isOddOrEven();
    expect(result).to.be.undefined;
  });
});
