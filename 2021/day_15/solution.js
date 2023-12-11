export default function checkSledJump(heights) {
  const areHeightsAscending = (heights) => {
    if (heights.length !== [...new Set(heights)].length) {
      return false;
    }

    return heights
      .slice(0, -1)
      .reduce((_, height, i) => height < heights[i + 1], false);
  };

  const maxIndex = heights.indexOf(Math.max(...heights));
  const heightsBeforeMax = heights.slice(0, maxIndex + 1);
  const heightsAfterMax = heights.slice(maxIndex).reverse();

  return (
    areHeightsAscending(heightsBeforeMax) &&
    areHeightsAscending(heightsAfterMax)
  );
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
