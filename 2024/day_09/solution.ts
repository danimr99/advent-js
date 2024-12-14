(() => {
  type Board = string[];
  type Movement = "U" | "D" | "R" | "L";
  type Result = "none" | "crash" | "eat";

  function moveTrain(board: Board, mov: Movement): Result {
    const directions: Record<"L" | "R" | "U" | "D", [number, number]> = {
      L: [0, -1],
      R: [0, 1],
      U: [-1, 0],
      D: [1, 0],
    };
    const [dx, dy] = directions[mov];

    // Find train's head (@)
    const x = board.findIndex((row) => row.includes("@"));
    const y = board[x].indexOf("@");

    const [newX, newY] = [x + dx, y + dy];

    // Validate position and return result
    if (newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length)
      return "crash";

    return ({ "@": "crash", o: "crash", "*": "eat" }[board[newX][newY]] ||
      "none") as Result;
  }

  const board = ["·····", "*····", "@····", "o····", "o····"];

  console.log(moveTrain(board, "U")); // ➞ 'eat'
  console.log(moveTrain(board, "D")); // ➞ 'crash'
  console.log(moveTrain(board, "L")); // ➞ 'crash'
  console.log(moveTrain(board, "R")); // ➞ 'none'
})();
