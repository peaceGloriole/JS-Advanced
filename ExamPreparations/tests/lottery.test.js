import { expect } from 'chai';
import { lottery } from "../JS-Advanced/03.Lottery Unit Test/Lottery.js";

describe(`Lottery Testing`, () => {
  describe(`buyLotteryTicket functionality`, () => {
    it(`should throw if invalid input`, () => {
      expect(() => lottery.buyLotteryTicket(1, 1, 1)).to.throw();
      expect(() => lottery.buyLotteryTicket(1, `1`, true)).to.throw();
      expect(() => lottery.buyLotteryTicket([1], 1, false)).to.throw();
      expect(() => lottery.buyLotteryTicket([1], `1`, [1])).to.throw();
      expect(() => lottery.buyLotteryTicket(`1`, `1`, `1`)).to.throw();
    });
    it(`should throw if boolean is false`, () => {
      expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw();
    });
    it(`should be valid if price is > 0 count >= 1 type is number`, () => {
      expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(`You bought 1 tickets for 1$.`);
      expect(lottery.buyLotteryTicket(1, 2, true)).to.equal(`You bought 2 tickets for 2$.`);
    });
  });

  describe(`checkTicket functionality`, () => {
    it(`throw for invalid input`, () => {
      expect(() => lottery.checkTicket([1], 1)).to.throw();
      expect(() => lottery.checkTicket(1, [1])).to.throw();
      expect(() => lottery.checkTicket([], [])).to.throw();
      expect(() => lottery.checkTicket(1, 1)).to.throw();
    });

    it(`valid if length of both params are exactly 6 numbers inside`, () => {
      expect(() => {
        const ticket1 = [123136];
        const ticket2 = [235362];

        if (ticket1.length !== 6 || !ticket1.every(number => typeof number === 'number')) {
          throw new Error("ticket1 must have exactly 6 numbers.");
        }

        if (ticket2.length !== 6 || !ticket2.every(number => typeof number === 'number')) {
          throw new Error("ticket2 must have exactly 6 numbers.");
        }

        lottery.checkTicket(ticket1, ticket2);
      }).to.throw();
    });

    it(`should compare the numbers from the ticket with the winning numbers.`, () => {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])).to.equal("Congratulations you win, check your reward!");
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 8])).to.equal("Congratulations you win, check your reward!");
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 6])).to.equal("Congratulations you win, check your reward!");
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 8, 3, 7, 8, 9])).to.be.undefined;
    });
  });

  describe('Lottery', () => {
    describe('secondChance functionality', () => {
      it('should throw for invalid input', () => {
  
        expect(() => lottery.secondChance('invalid', [456, 789, 123])).to.throw('Invalid input!');
        expect(() => lottery.secondChance(123, 'invalid')).to.throw('Invalid input!');
        expect(() => lottery.secondChance('invalid', 'invalid')).to.throw('Invalid input!');
      });
  
      it('should return "You win our second chance prize!" if ticketID is included in secondChanceWinningIDs', () => {
  
        expect(lottery.secondChance(123, [456, 789, 123])).to.equal('You win our second chance prize!');
      });
  
      it('should return "Sorry, your ticket didn\'t win!" if ticketID is not included in secondChanceWinningIDs', () => {
  
        expect(lottery.secondChance(999, [456, 789, 123])).to.equal("Sorry, your ticket didn't win!");
      });
    });
  });
});
