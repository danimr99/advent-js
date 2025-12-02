/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap(({ toy, quantity }) => {
    const n = Math.max(0, Math.floor(quantity));
    return n ? Array(n).fill(toy) : [];
  });
}

const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];

const result1 = manufactureGifts(production1);
console.log(result1); // ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: "train", quantity: 0 }, // not manufactured
  { toy: "bear", quantity: -2 }, // neither
  { toy: "puzzle", quantity: 1 },
];

const result2 = manufactureGifts(production2);
console.log(result2); // ['puzzle']

const production3 = [];
const result3 = manufactureGifts(production3);
console.log(result3); // []
