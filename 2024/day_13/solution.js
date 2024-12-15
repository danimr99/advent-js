function isRobotBack(moves) {
  let x = 0,
    y = 0;
  let inverted = false;
  let visited = new Set();

  const moveActions = {
    L: (intensity) => (x -= intensity),
    R: (intensity) => (x += intensity),
    U: (intensity) => (y += intensity),
    D: (intensity) => (y -= intensity),
  };

  const invertedMoves = {
    L: "R",
    R: "L",
    U: "D",
    D: "U",
  };

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    let intensity = 1;

    switch (move) {
      case "*":
        intensity = 2;
        move = moves[++i];
        break;
      case "!":
        inverted = !inverted;
        move = moves[++i];
        break;
      case "?":
        let nextMove = moves[++i];
        if (visited.has(nextMove)) continue;
        move = nextMove;
        break;
    }

    if (inverted) {
      move = invertedMoves[move] || move;
      inverted = false;
    }

    visited.add(move);

    if (moveActions[move]) {
      moveActions[move](intensity);
    }
  }

  return x === 0 && y === 0 ? true : [x, y];
}

console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2, 0]
console.log(isRobotBack("U!D")); // [0, 2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0, 1]
console.log(isRobotBack("*U?U")); // [0, 2]
console.log(isRobotBack("U?D?U")); // true
console.log(isRobotBack("R!U?U")); // [1, 0]
console.log(isRobotBack("UU!U?D")); // [0, 1]
