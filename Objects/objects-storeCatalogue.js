function storeCatalogue(arr) {
  let catalogue = {};

  for (let tokens of arr) {
    let [product, price] = tokens.split(' : ');
    price = Number(price);

    if (!catalogue.hasOwnProperty(product[0])) {
      catalogue[product[0]] = [];
    }

    catalogue[product[0]].push({ name: product, price });
  }

  for (let group in catalogue) {
    catalogue[group].sort((a, b) => a.name.localeCompare(b.name));
  }

  const sortedGroups = Object.keys(catalogue).sort();

  for (let group of sortedGroups) {
    console.log(group);

    for (let product of catalogue[group]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}

storeCatalogue([
  'Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
  'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'
]);
