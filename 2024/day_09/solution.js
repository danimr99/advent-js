function moveTrain(board, mov) {
  const directions = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
  const [dx, dy] = directions[mov];
  let train = [];
  let head;

  // Find the train's head and carriages
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "@") head = [i, j];
      if (board[i][j] === "@" || board[i][j] === "o") train.push([i, j]);
    }
  }

  const newHead = [head[0] + dx, head[1] + dy];

  // Check for collisions with the board edges
  if (
    newHead[0] < 0 ||
    newHead[0] >= board.length ||
    newHead[1] < 0 ||
    newHead[1] >= board[0].length
  ) {
    return "crash";
  }

  // Check for collisions with itself
  for (const [x, y] of train) {
    if (newHead[0] === x && newHead[1] === y) {
      return "crash";
    }
  }

  // Check if it collects a magical fruit
  if (board[newHead[0]][newHead[1]] === "*") {
    return "eat";
  }

  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U")); // ➞ 'eat'
console.log(moveTrain(board, "D")); // ➞ 'crash'
console.log(moveTrain(board, "L")); // ➞ 'crash'
console.log(moveTrain(board, "R")); // ➞ 'none'
