function fulfillOrders(library, orders) {
  return orders.map(order => {
    const product = { ...order.template };

    if (order.parts && order.parts.length > 0) {
      order.parts.forEach(part => {
        if (library[part]) {
          product[part] = library[part].bind(product);
        }
      });
    }

    return product;
  });
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];

const fulfilledOrders = fulfillOrders(library, orders);
console.log(fulfilledOrders);
