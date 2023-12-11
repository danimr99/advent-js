const maze = [
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
];

function canExit(maze) {
  const startRow = maze.findIndex((row) => row.includes("S"));
  const startCol = maze[startRow].findIndex((cell) => cell === "S");

  const visited = [];
  const queue = [[startRow, startCol]];
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const [row, col] = queue.shift();

    if (maze[row][col] === "E") {
      return true;
    }

    for (const [rowDiff, colDiff] of directions) {
      const newRow = row + rowDiff;
      const newCol = col + colDiff;

      if (
        newRow < 0 ||
        newRow >= maze.length ||
        newCol < 0 ||
        newCol >= maze[0].length ||
        maze[newRow][newCol] === "W" ||
        (visited[newRow] && visited[newRow][newCol])
      ) {
        continue;
      }

      visited[newRow] = visited[newRow] || [];
      visited[newRow][newCol] = true;
      queue.push([newRow, newCol]);
    }
  }

  return false;
}

console.log(canExit(maze));
