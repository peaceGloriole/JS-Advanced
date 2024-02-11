class WineSelection {
  space;
  wines = [];
  bill = 0;

  constructor(space) {
    this.space = space;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error(`Not enough space in the cellar.`);
    }
    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false
    });

    const lastWine = this.wines[this.wines.length - 1];

    return `You reserved a bottle of ${lastWine.wineName} ${lastWine.wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const findWine = this.wines.find(p => p.wineName === wineName);

    if (!findWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (findWine.paid === true) {
      throw new Error(`{wineName} has already been paid.`);
    }

    findWine.paid = true;
    this.bill += price;

    return `You bought a ${wineName} for a ${price}$.`
  }

  openBottle(wineName) {
    const findWine = this.wines.find(p => p.wineName === wineName);

    if (!findWine) {
      throw new Error(`The wine, you're looking for, is not found.`);
    }

    if (findWine.paid === false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    return `You drank a bottle of ${findWine.wineName}.`;
  }

  cellarRevision(wineType) {
    if (!wineType) {
      if (this.wines.length === 0) {
        return "The cellar is empty.";
      }

      const emptySlots = this.space - this.wines.length;
      const totalBill = this.bill;

      const sortedWines = this.wines.slice().sort((a, b) => a.wineName.localeCompare(b.wineName));

      const result = sortedWines.map(wine => {
        return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid.' : 'Not Paid.'}`;
      });

      return `You have space for ${emptySlots} bottles more.\nYou paid ${totalBill}$ for the wine.\n${result.join('\n')}`;
    }

    const foundWines = this.wines.filter(p => p.wineType === wineType);

    if (foundWines.length === 0) {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }

    const result = foundWines.map(wine => {
      return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid.' : 'Not Paid.'}`;
    });

    return result.join('\n');
  }

}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
