function maxGifts(houses) {
  let previousMax = 0;
  let currentMax = 0;

  for (let i = 0; i < houses.length; i++) {
    const aux = currentMax;
    currentMax = Math.max(currentMax, previousMax + houses[i]);
    previousMax = aux;
  }

  return currentMax;
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
