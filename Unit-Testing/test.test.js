import { expect } from 'chai';

describe(`my first test`, () => {
  it(`test`, () => {
    expect(false, `Custom message: it should be truthy`).to.be.ok;
  });
});