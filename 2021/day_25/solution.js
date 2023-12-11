export default function canMouseEat(direction, game) {
  const MOVEMENTS = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };

  const mousePosition = {
    row: game.findIndex((row) => row.includes("m")),
    col: game.find((row) => row.includes("m")).indexOf("m"),
  };

  mousePosition.row += MOVEMENTS[direction.toLowerCase()][0];
  mousePosition.col += MOVEMENTS[direction.toLowerCase()][1];

  if (
    mousePosition.row < 0 ||
    mousePosition.row >= game.length ||
    mousePosition.col < 0 ||
    mousePosition.col >= game[0].length
  )
    return false;

  return game[mousePosition.row][mousePosition.col] === "*";
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log(canMouseEat("up", room)); // false
console.log(canMouseEat("down", room)); // true
console.log(canMouseEat("right", room)); // false
console.log(canMouseEat("left", room)); // false
