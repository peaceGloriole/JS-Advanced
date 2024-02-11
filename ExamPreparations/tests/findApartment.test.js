import { expect } from 'chai';
import { findNewApartment } from '../JS-Advanced/03.Find Apartment Unit Test/findApartment.js'

describe(`Find New Apartment Tests`, () => {
  describe(`isGoodLocation functionality`, () => {
    it(`should throw error for Invalid input`, () => {
      expect(() => findNewApartment.isGoodLocation(1, 1)).to.throw();
      expect(() => findNewApartment.isGoodLocation(`Sofia`, 1)).to.throw();
      expect(() => findNewApartment.isGoodLocation(1, true)).to.throw();
    });
    it(`if value of boolean is false/true - different messages`, () => {
      expect(findNewApartment.isGoodLocation(`Sofia`, false)).to.equal(`There is no public transport in area.`);
      expect(findNewApartment.isGoodLocation(`Sofia`, true)).to.equal(`You can go on home tour!`);
      expect(findNewApartment.isGoodLocation(`Varna`, true)).to.equal(`You can go on home tour!`);
      expect(findNewApartment.isGoodLocation(`Plovdiv`, true)).to.equal(`You can go on home tour!`);
    });
    it(`if value of city is different than Sofia Plovdiv or Varna`, () => {
      expect(findNewApartment.isGoodLocation(`Dobrich`, true)).to.equal(`This location is not suitable for you.`);
      expect(findNewApartment.isGoodLocation(`Dobrich`, false)).to.equal(`This location is not suitable for you.`);
    });
  });

  describe(`isLargeEnough functionality`, () => {
    it(`should throws for invalid input`, () => {
      expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw();
      expect(() => findNewApartment.isLargeEnough(``, 1)).to.throw();
      expect(() => findNewApartment.isLargeEnough({}, 1)).to.throw();
      expect(() => findNewApartment.isLargeEnough([], 1)).to.throw();
      expect(() => findNewApartment.isLargeEnough([], [])).to.throw();
      expect(() => findNewApartment.isLargeEnough([40], `1`)).to.throw();
      expect(() => findNewApartment.isLargeEnough([40], [1])).to.throw();
    });
  });

  describe(`isItAffordable functionality`, () => {
    it(`should throw errors if params are not numbers`, () => {
      expect(() => findNewApartment.isItAffordable([1], 1)).to.throw();
      expect(() => findNewApartment.isItAffordable([1], `1`)).to.throw();
      expect(() => findNewApartment.isItAffordable(1, `1`)).to.throw();
    });
    it(`should return message if result is lower than 0`, () => {
      expect(findNewApartment.isItAffordable(100, 90)).to.equal(`You don't have enough money for this house!`);
    });
    it(`should return message if result is above 0`, () => {
      expect(findNewApartment.isItAffordable(100, 120)).to.equal(`You can afford this home!`);
    });
  });
});