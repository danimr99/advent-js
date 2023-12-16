const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];

function autonomousDrive(store, movements) {
  function moveHorizontally(rowStr, col, mv) {
    col += +(rowStr[col + 1] === ".") * +(mv === "R");
    col -= +(rowStr[col - 1] === ".") * +(mv === "L");
    return col;
  }

  function moveVertically(store, row, col, mv) {
    row += +(store.at(row + 1)?.at(col) === ".") * +(mv === "D");
    row -= +(store.at(row - 1)?.at(col) === ".") * +(mv === "U");
    return row;
  }

  function replaceCharacter(str, col, char) {
    return str.substring(0, col) + char + str.substring(col + 1);
  }

  let row = store.findIndex((_) => _.includes("!"));
  let col = store[row].indexOf("!");

  store[row] = store[row].replace("!", ".");

  for (const mv of movements) {
    col = moveHorizontally(store[row], col, mv);
    row = moveVertically(store, row, col, mv);
  }

  store[row] = replaceCharacter(store[row], col, "!");

  return store;
}

console.log(autonomousDrive(store, movements));
