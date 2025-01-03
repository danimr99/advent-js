(() => {
  function detectBombs(grid: boolean[][]): number[][] {
    const directions: [number, number][] = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const result: number[][] = [];

    grid.forEach((row, rowIndex) => {
      const rowResult = row.map((_, columnIndex) => {
        return directions.reduce((count, [dx, dy]) => {
          const x = rowIndex + dx;
          const y = columnIndex + dy;
          return count + (grid[x] && grid[x][y] ? 1 : 0);
        }, 0);
      });

      result.push(rowResult);
    });

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
})();
