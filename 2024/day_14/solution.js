function minMovesToStables(reindeer, stables) {
  // Order the reindeer and stables
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  // Calculate the sum of the absolute differences between the reindeer and stables
  let totalMoves = 0;
  for (let i = 0; i < reindeer.length; i++) {
    totalMoves += Math.abs(reindeer[i] - stables[i]);
  }

  return totalMoves;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])); // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])); // -> 8
