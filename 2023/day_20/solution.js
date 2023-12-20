const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

function distributeGifts(weights) {
  return weights.map((row, i) =>
    row.map((_, j) => {
      const current = weights[i]?.[j];
      const left = weights[i]?.[j - 1];
      const right = weights[i]?.[j + 1];
      const top = weights[i - 1]?.[j];
      const bottom = weights[i + 1]?.[j];

      const existingValues = [current, left, right, top, bottom].filter(
        Boolean
      );

      return Math.round(
        existingValues.reduce((a, b) => a + b, 0) / existingValues.length
      );
    })
  );
}

console.log(distributeGifts(input));
