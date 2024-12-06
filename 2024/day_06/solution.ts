(() => {
  function inBox(box: string[]): boolean {
    for (const row of box.slice(1, -1)) {
      if (
        row.includes("*") &&
        row.indexOf("*") > 0 &&
        row.indexOf("*") < row.length - 1
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
})();
