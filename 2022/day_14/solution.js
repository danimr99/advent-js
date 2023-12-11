const path = Object.freeze([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]);

function getOptimalPath(path) {
  return path.reduceRight((previousRow, currentRow) => {
    return currentRow.map(
      (currentValue, index) =>
        currentValue + Math.min(previousRow[index], previousRow[index + 1])
    );
  })[0];
}

console.log(getOptimalPath(path));
