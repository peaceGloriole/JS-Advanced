function carFactory(order) {
  let result = {
    model: order.model,
    engine: null,
    carriage: null,
    wheels: null
  };
  let engineDetail = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 }
  };

  if (order.power <= 90) {
    result.engine = engineDetail.smallEngine;
  } else if (order.power <= 120) {
    result.engine = engineDetail.normalEngine;
  } else {
    result.engine = engineDetail.monsterEngine;
  }

  if (order.carriage === `hatchback`) {
    result.carriage = { type: 'hatchback', color: order.color };
  } else {
    result.carriage = { type: 'coupe', color: order.color };
  }

  let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize
  
  result.wheels = new Array(4).fill(wheelSize);

  return result
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));