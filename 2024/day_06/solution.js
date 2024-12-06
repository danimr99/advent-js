function inBox(box) {
  const rows = box.length;
  const cols = box[0].length;

  // Check every interior cell
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (box[i][j] === "*") {
        // If exists an '*', check that it is not in the border
        if (
          !box[0].includes("*") && // Not in the top row
          !box[rows - 1].includes("*") && // Not in the bottom row
          box[i][0] === "#" && // Not in the left border
          box[i][cols - 1] === "#" // Not in the right border
        ) {
          return true;
        }
      }
    }
  }

  // No valid '*' found
  return false;
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true
console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBox(["*####", "#   #", "#  #*", "####"])); // ➞ false
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
