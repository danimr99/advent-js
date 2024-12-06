function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    if (
      box[i].includes("*") &&
      box[i].indexOf("*") > 0 &&
      box[i].indexOf("*") < box[i].length - 1
    ) {
      return true;
    }
  }
  return false;
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true
console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBox(["*####", "#   #", "#  #*", "####"])); // ➞ false
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
