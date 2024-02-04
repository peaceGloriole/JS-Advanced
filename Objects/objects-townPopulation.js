function solve(input) {
  const cityInfo = {};

  for (let info of input) {
    let [city, pop] = info.split(` <-> `);
    pop = Number(pop);

    if (cityInfo.hasOwnProperty(city)) {
      cityInfo[city] += pop;
    } else {
      cityInfo[city] = pop;
    }
  }

  for (let [name, population] of Object.entries(cityInfo)) {
    console.log(`${name} : ${population}`);
  }
}

solve(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000']);