const map = `
.....1....
..S.......
..........
....3.....
......2...`;

function travelDistance(map) {
  const matrixMap = map.split("\n").map((row) => row.split(""));
  const amountOfChildren = Math.max(
    ...matrixMap.flat().filter((x) => !isNaN(x))
  );
  const santaPosition = matrixMap
    .flatMap((row, i) => row.map((_, j) => [i, j]))
    .find(([i, j]) => matrixMap[i][j] === "S");

  let santaMoves = 0;

  for (let i = 0; i < amountOfChildren; i++) {
    const child = i + 1;
    const nextChildPosition = matrixMap
      .flatMap((row, i) => row.map((_, j) => [i, j]))
      .find(([i, j]) => matrixMap[i][j] === child.toString());

    const [santaRow, santaCol] = santaPosition;
    const [childRow, childCol] = nextChildPosition;

    santaMoves += Math.abs(childRow - santaRow) + Math.abs(childCol - santaCol);

    santaPosition[0] = childRow;
    santaPosition[1] = childCol;
  }

  return santaMoves;
}

console.log(travelDistance(map));
