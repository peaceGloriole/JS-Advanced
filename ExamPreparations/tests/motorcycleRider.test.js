import { motorcycleRider } from '../JS-Advanced/03.Motorcycle Rider -Resources/motorcycleRider.js';
import { expect } from 'chai';

describe(`Motor Cycle JS`, function () {

  describe(`licenseRestriction function`, function () {
    it(`should return the correct information for valid input`, () => {

      expect(motorcycleRider.licenseRestriction(`AM`)).to.be.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`);
      expect(motorcycleRider.licenseRestriction(`A1`)).to.be.equal(`Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.`);
      expect(motorcycleRider.licenseRestriction(`A2`)).to.be.equal(`Motorcycles with maximum power of 35KW. and the minimum age is 18.`);
      expect(motorcycleRider.licenseRestriction(`A`)).to.be.equal(`No motorcycle restrictions, and the minimum age is 24.`);
    });

    it(`should throw an error if category is not a string`, () => {
      expect(() => motorcycleRider.licenseRestriction(1)).to.throw();
    });
  });

  describe(`motorcycleShowroom function`, function () {
    it(`should return 1 element from array`, () => {
      expect(motorcycleRider.motorcycleShowroom([`50`], 50)).to.equal(`There are 1 available motorcycles matching your criteria!`)
    });

    it(`should return all elements from array`, () => {
      expect(motorcycleRider.motorcycleShowroom([`50`, `51`], 100)).to.equal(`There are 2 available motorcycles matching your criteria!`)
    });

    it(`should throws for non-array`, () => {
      expect(() => motorcycleRider.motorcycleShowroom(`50`, 50)).to.throw();
    });

    it(`should throws for non-number`, () => {
      expect(() => motorcycleRider.motorcycleShowroom([`50`], [`50`])).to.throw();
    });

    it(`should throws if array is empty OR volume is less than 50`, () => {
      expect(() => motorcycleRider.motorcycleShowroom([], 50)).to.throw();
      expect(() => motorcycleRider.motorcycleShowroom([`50`], 49)).to.throw();
    });
  });

  describe(`otherSpendings function`, function () {
    it(`should return correct result without discount`, () => {
      expect(motorcycleRider.otherSpendings([`helmet`, `jacked`], [`200`, `300`], false)).to.equal(`You spend $500.00 for equipment and consumables!`);
    });
    it(`should return correct result with discount`, () => {
      expect(motorcycleRider.otherSpendings([`helmet`], [`200`], true)).to.equal(`You spend $180.00 for equipment and consumables with 10% discount!`);
    });
    it(`should throw error if input is not valid`, () => {
      expect(() => motorcycleRider.otherSpendings({}, [`200`], true)).to.throw();
      expect(() => motorcycleRider.otherSpendings([`helmet`], `200`, true)).to.throw();
      expect(() => motorcycleRider.otherSpendings([`helmet`], [`200`], 200)).to.throw();
    });
  });
});