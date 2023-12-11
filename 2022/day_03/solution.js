const packOfGifts = Object.freeze(["book", "doll", "ball"]);
const reindeers = Object.freeze(["dasher", "dancer"]);

function distributeGifts(packOfGifts, reindeers) {
  const reindeersMaxWeight = reindeers.reduce(
    (total, reindeer) => total + reindeer.length * 2,
    0
  );

  const giftsWeight = packOfGifts.reduce(
    (total, gift) => total + gift.length,
    0
  );

  return Math.trunc(reindeersMaxWeight / giftsWeight);
}

console.log(distributeGifts(packOfGifts, reindeers));
