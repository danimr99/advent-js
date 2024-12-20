function detectBombs(grid) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const result = [];

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const rowResult = [];

    for (
      let columnIndex = 0;
      columnIndex < grid[rowIndex].length;
      columnIndex++
    ) {
      let count = 0;

      for (const [dx, dy] of directions) {
        const x = rowIndex + dx;
        const y = columnIndex + dy;

        if (grid[x] && grid[x][y]) {
          count++;
        }
      }

      rowResult.push(count);
    }

    result.push(rowResult);
  }

  return result;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ])
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
