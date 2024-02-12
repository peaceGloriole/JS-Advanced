import { expect } from 'chai';
import { petAdoptionAgency } from '../JS-Advanced/03.Pet Agency Unit Test/petAdoptionAgency.js';

describe(`Unit testing petAdoptAgency`, () => {
  describe(`isPetAvailable functionality`, () => {
    it(`should return message if second para is <= 0`, () => {
      expect(petAdoptionAgency.isPetAvailable(`pet`, 0, true)).to.equal(`Sorry, there are no pet(s) available for adoption at the agency.`);
      expect(petAdoptionAgency.isPetAvailable(`pet`, 0, false)).to.equal(`Sorry, there are no pet(s) available for adoption at the agency.`);
      expect(petAdoptionAgency.isPetAvailable(`pet`, -1, true)).to.equal(`Sorry, there are no pet(s) available for adoption at the agency.`);
      expect(petAdoptionAgency.isPetAvailable(`pet`, -1, false)).to.equal(`Sorry, there are no pet(s) available for adoption at the agency.`);
    });
    it(`should return msg if second para > 0 and third para is true`, () => {
      expect(petAdoptionAgency.isPetAvailable(`pet`, 1, true)).to.equal(`Great! We have 1 vaccinated pet(s) available for adoption at the agency.`);
    });
    it(`should return msg if second para > 0 and third para is false`, () => {
      expect(petAdoptionAgency.isPetAvailable(`pet`, 1, false)).to.equal(`Great! We have 1 pet(s) available for adoption, but they need vaccination.`);
    });
    it(`should throw for invalid input`, () => {
      expect(() => petAdoptionAgency.isPetAvailable([`pet`], 1, true)).to.throw();
      expect(() => petAdoptionAgency.isPetAvailable(`pet`, 1, `true`)).to.throw();
      expect(() => petAdoptionAgency.isPetAvailable(`pet`, `1`, true)).to.throw();
    });
  });
  
  describe(`getRecommendedPets functionality`, () => {
    it(`should throw for invalid input`, () => {
      expect(() => petAdoptionAgency.getRecommendedPets([`pet`], [`pet`])).to.throw();
      expect(() => petAdoptionAgency.getRecommendedPets(`pet`, `pet`)).to.throw();
      expect(() => petAdoptionAgency.getRecommendedPets(1, [`pet`])).to.throw();
      expect(() => petAdoptionAgency.getRecommendedPets([`pet`], 1)).to.throw();
    });
    const petList = [
      { name: 'Fluffy', traits: ['friendly', 'playful'] },
      { name: 'Whiskers', traits: ['curious', 'independent'] },
      { name: 'Buddy', traits: ['friendly', 'loyal'] },
      // Add more pets as needed
    ];
  
    it('should return recommended pets with the desired traits', () => {
      const desiredTraits = 'friendly';
      const result = getRecommendedPets(petList, desiredTraits);
      const expected = 'Recommended pets with the desired traits (friendly): Fluffy, Buddy';
      expect.strictEqual(result, expected);
    });
  
    it('should handle no matching pets', () => {
      const desiredTraits = 'smart';
      const result = getRecommendedPets(petList, desiredTraits);
      const expected = 'Sorry, we currently have no recommended pets with the desired traits: smart.';
      expect.strictEqual(result, expected);
    });
  });
});