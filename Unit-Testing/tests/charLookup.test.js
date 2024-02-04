import { lookupChar } from '../03.charLookup/charLookup.js';
import { expect } from 'chai';

describe(`lookupChar function tests`, () => {
  it(`should return undefined if the first parameter is not a string`, () => {
    const result = lookupChar(20, 0);
    expect(result).to.be.undefined;
  });
  it(`should return undefined if the second parameter is not a number`, () => {
    const result = lookupChar(`test`, `test`);
    expect(result).to.be.undefined;
  });
  it(`should return undefined if the second parameter is floating number`, () => {
    const result = lookupChar(`test`, 2.3);
    expect(result).to.be.undefined;
  });
  it(`should return Incorrect index if the index is a negative number`, () => {
    const result = lookupChar(`test`, -2);
    expect(result).to.equal(`Incorrect index`);
  });
  it(`should work correctly if both indexes are correct`, () => {
    const result = lookupChar(`test`, 2);
    expect(result).to.equal(`s`);
  });
  it(`should return Incorrect index if index is greater than the length`, () => {
    const result = lookupChar(`test`, 5);
    expect(result).to.equal(`Incorrect index`);
  });
  it(`should return Incorrect index if the second para is same as length`, () => {
    const result = lookupChar(`test`, 4);
    expect(result).to.equal(`Incorrect index`);
  });
});
