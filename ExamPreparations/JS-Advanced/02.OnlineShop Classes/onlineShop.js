class OnlineShop {
  warehouseSpace;
  products = [];
  sales = [];

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
  }

  loadingStore(product, quantity, spaceRequired) {

    let existingProduct = this.products.find(p => p.product === product);

    if (existingProduct) {
      existingProduct.product += quantity;
    }

    if (this.warehouseSpace < spaceRequired) {
      throw new Error(`Not enough space in the warehouse.`);
    }

    this.warehouseSpace -= spaceRequired;
    this.products.push({
      product,
      quantity
    });

    return `The ${product} has been successfully delivered in the warehouse.`
  }

  quantityCheck(product, minimalQuantity) {

    const foundProduct = this.products.find(p => p.product == product);

    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`)
    }

    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    if (minimalQuantity <= foundProduct.quantity) {
      return `You have enough from product ${product}.`
    }

    let difference = minimalQuantity - foundProduct.quantity;
    foundProduct.quantity = minimalQuantity;

    return `You added ${difference} more from the ${foundProduct.product} products.`;

  }

  sellProduct(product) {
    const sellProduct = this.products.find(p => p.product == product);

    if (!sellProduct) {
      throw new Error(`There is no ${product} in the warehouse.`)
    }

    sellProduct.quantity -= 1;

    let quantity = product.quantity;

    this.sales.push({
      product,
      quantity
    });

    return `The ${sellProduct.product} has been successfully sold.`
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error(`There are no sales today!`);
    } else {
      let result = `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`;

      for (const item of this.products) {
        result += `${item.product}-${item.quantity} more left\n`;
      }

      return result;
    }
  }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'))

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));


