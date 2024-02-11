import { expect } from 'chai';
import { findNewApartment } from '../JS-Advanced/03.Find Apartment Unit Test/findApartment.js'

describe(`Find New Apartment Tests`, () => {
  describe(`isGoodLocation functionality`, () => {
    it(`should return message if city not found`, () => {
      expect(findNewApartment.isGoodLocation()).to.equal(`This location is not suitable for you.`);
    });
  });
});