import { expect } from 'chai';
import { planYourTrip } from '../JS-Advanced/03.PlanYourTrip Unit Test/planYourTrip.js';

describe(`Test Plan Your Trip`, () => {
  describe(`choosingDestination functionality`, () => {
    it(`year is different than 2024 throw error`, () => {
      expect(() => planYourTrip.choosingDestination(`destination`, `season`, 2023)).to.throw('Invalid Year!');
    });
    it(`should throw if destination !== Ski Resort`, () => {
      expect(() => planYourTrip.choosingDestination(`Bulgaria`, `season`, 2024)).to.throw('This destination is not what you are looking for.');
      expect(() => planYourTrip.choosingDestination(`Beach Resort`, `season`, 2024)).to.throw('This destination is not what you are looking for.');
    });
    it(`should return msg if season is Winter`, () => {
      expect(planYourTrip.choosingDestination(`Ski Resort`, `Winter`, 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
    });
    it(`should return message if season is not Winter`, () => {
      const result = planYourTrip.choosingDestination(`Ski Resort`, `Summer`, 2024);
      expect(result).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
    });
  });
  describe(`exploreOptions functionality`, () => {
    it(`should throw an error for invalid activities parameter`, () => {
      expect(() => planYourTrip.exploreOptions('Skiing', 1)).to.throw('Invalid Information!');
    });

    it(`should throw an error for invalid activityIndex parameter (not a number)`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 'index')).to.throw('Invalid Information!');
    });

    it(`should throw an error for invalid activityIndex parameter (not an integer)`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 1.5)).to.throw('Invalid Information!');
    });

    it(`should throw an error for out-of-bounds activityIndex parameter`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 2)).to.throw('Invalid Information!');
    });

    it(`should remove the activity at the specified index and return the changed array as a string`, () => {
      expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 1)).to.equal('Skiing, Winter Hiking');
    });
  });
  describe(`estimateExpenses functionality`, () => {
    it(`should throw error if distanceInKilometers is not a number`, () => {
      expect(() => planYourTrip.estimateExpenses('abc', 2)).to.throw('Invalid Information!');
    });

    it(`should throw error if distanceInKilometers is negative`, () => {
      expect(() => planYourTrip.estimateExpenses(-100, 2)).to.throw('Invalid Information!');
    });

    it(`should throw error if distanceInKilometers is zero`, () => {
      expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw('Invalid Information!');
    });

    it(`should throw error if fuelCostPerLiter is not a number`, () => {
      expect(() => planYourTrip.estimateExpenses(100, 'xyz')).to.throw('Invalid Information!');
    });

    it(`should throw error if fuelCostPerLiter is negative`, () => {
      expect(() => planYourTrip.estimateExpenses(100, -2)).to.throw('Invalid Information!');
    });

    it(`should throw error if fuelCostPerLiter is zero`, () => {
      expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw('Invalid Information!');
    });

    it(`should return budget-friendly message if total cost is <= to $500`, () => {
      expect(planYourTrip.estimateExpenses(200, 2)).to.equal('The trip is budget-friendly, estimated cost is $400.00.');
    });

    it(`should return plan message if total cost is > $500`, () => {
      expect(planYourTrip.estimateExpenses(300, 2)).to.equal('The estimated cost for the trip is $600.00, plan accordingly.');
    });
    it(`should throw error if activities is a string`, () => {
      expect(() => planYourTrip.exploreOptions('Skiing', 0)).to.throw('Invalid Information!');
    });

    it(`should throw error if activityIndex is a string`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 'abc')).to.throw('Invalid Information!');
    });

    it(`should throw error if activityIndex is a floating-point number`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 1.5)).to.throw('Invalid Information!');
    });

    it(`should throw error if activityIndex is negative`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], -1)).to.throw('Invalid Information!');
    });

    it(`should throw error if activityIndex is greater than or equal to activities length`, () => {
      expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 2)).to.throw('Invalid Information!');
    });

    it(`should return the changed array of activities as a string, joined by a comma and a space`, () => {
      expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 1)).to.equal('Skiing, Winter Hiking');
    });
  });
});