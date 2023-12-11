const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = Object.freeze([
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
]);

function howManyReindeers(reindeerTypes, gifts) {
  const sortedReindeers = reindeerTypes.sort(
    (a, b) => a.weightCapacity - b.weightCapacity
  );

  return gifts.map((gift) => {
    let reindeers = sortedReindeers.map((reindeer) => ({
      type: reindeer.type,
      num: 0,
    }));

    while (gift.weight > 0) {
      for (const reindeer of sortedReindeers) {
        if (gift.weight >= reindeer.weightCapacity) {
          gift.weight -= reindeer.weightCapacity;
          reindeers.find((obj) => obj.type === reindeer.type).num++;
        }
      }
    }

    return {
      country: gift.country,
      reindeers: reindeers.filter((obj) => obj.num > 0).reverse(),
    };
  });
}

console.log(howManyReindeers(reindeerTypes, gifts));
