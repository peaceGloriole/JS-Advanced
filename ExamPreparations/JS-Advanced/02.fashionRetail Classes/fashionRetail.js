class FashionRetailInventory {
  storehouse;
  location;
  productStock = [];
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
  }

  addProduct(productName, size, quantity, price) {
    const searchProduct = this.productStock.find(p => p.productName === productName);

    if (this.productStock.size) {
      searchProduct.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }

    this.productStock.push({
      productName,
      size,
      quantity,
      price
    });

    return `The product ${productName}, size ${size} was successfully added to the inventory`;
  }

  sendProduct(productName, size) {
    const index = this.productStock.findIndex(p => p.productName === productName && p.size === size);

    if (index === -1) {
      throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    }

    this.productStock.splice(index, 1);
    return `The product ${productName}, size ${size} was successfully removed from the inventory`;
  }

  findProductsBySize(size) {
    const matchingProducts = this.productStock.filter((p) => p.size === size);

    if (matchingProducts.length === 0) {
      return `There are no products available in that size`;
    }

    const formattedList = matchingProducts
      .map((p) => `${p.productName}-${p.quantity} pieces`)
      .join(', ');

    return formattedList;
  }

  listProducts () {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`;
    }

    const sortedProducts = this.productStock
      .sort((a, b) => a.productName.localeCompare(b.productName));

    const productInfo = sortedProducts.map((p) => `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`);

    return `${this.storehouse} storehouse in ${this.location} available products:\n${productInfo.join('\n')}`;

  }
}

// The product Shirt, size M was successfully added to the inventory
//   The product T-Shirt, size M was successfully added to the inventory
//   The product Shirt, size L was successfully added to the inventory
//   The product Shoes, size 9 was successfully added to the inventory
//   The product Shoes, size 9 was successfully removed from the inventory
//   East storehouse in Milano available products:
//   Shirt/Size:M/Quantity:10/Price:25$
//   Shirt/Size:L/Quantity:5/Price:30$
//   T-Shirt/Size:M/Quantity:10/Price:25$

const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());