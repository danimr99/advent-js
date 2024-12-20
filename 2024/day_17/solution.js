function detectBombs(grid) {
  const numberOfRows = grid.length;
  const numberOfColumns = grid[0].length;
  const result = [];

  // Count the number of bombs around each cell
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      let bombCount = 0;

      // Check the 8 cells around the current cell
      for (let x = rowIndex - 1; x <= rowIndex + 1; x++) {
        for (let y = columnIndex - 1; y <= columnIndex + 1; y++) {
          if (x >= 0 && x < numberOfRows && y >= 0 && y < numberOfColumns) {
            if (x === rowIndex && y === columnIndex) {
              continue;
            }

            if (grid[x][y]) {
              bombCount++;
            }
          }
        }
      }

      row.push(bombCount);
    }

    result.push(row);
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
