function createChristmasTree(ornaments, height) {
  let tree = "";

  const spaces = " ".repeat(height - 1);
  const ornamentsArray = ornaments.repeat(height).split("").join(" ");

  let ornamentIndex = 0;

  for (const treeLevel of Array(height).keys()) {
    const treeLevelLength = treeLevel + 1;
    const totalLevelLength = ornamentIndex + treeLevelLength;

    tree +=
      spaces.slice(treeLevel) +
      ornamentsArray.slice(ornamentIndex * 2, totalLevelLength * 2 - 1) +
      "\n";

    ornamentIndex = totalLevelLength % ornaments.length;
  }

  tree += `${spaces}|\n`;

  return tree;
}

console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("*@o", 3));
