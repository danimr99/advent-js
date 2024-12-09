function moveTrain(board, mov) {
  const directions = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
  const [dx, dy] = directions[mov];
  const [x, y] = board.reduce(
    (acc, row, i) => (row.includes("@") ? [i, row.indexOf("@")] : acc),
    []
  );

  const [newX, newY] = [x + dx, y + dy];

  if (newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length)
    return "crash";

  const outcomes = { "@": "crash", o: "crash", "*": "eat" };
  return outcomes[board[newX][newY]] || "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U")); // ➞ 'eat'
console.log(moveTrain(board, "D")); // ➞ 'crash'
console.log(moveTrain(board, "L")); // ➞ 'crash'
console.log(moveTrain(board, "R")); // ➞ 'none'
