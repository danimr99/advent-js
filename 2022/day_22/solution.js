const systemNames = Object.freeze([
  "tree_1",
  "tree_2",
  "house",
  "tree_1",
  "tree_2",
  "house",
]);
const stepNumbers = Object.freeze([1, 33, 10, 2, 44, 20]);

function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames
    .reduce((newArr, name, i) => {
      if (newArr.find((obj) => obj.name === name)) {
        newArr.find((obj) => obj.name === name).steps.push(stepNumbers[i]);
      } else {
        newArr.push({
          name: name,
          steps: [stepNumbers[i]],
        });
      }

      return newArr;
    }, [])
    .reduce((res, acc) => {
      acc.steps.reduce((acc, step) => {
        if (acc < step) {
          acc = step;
        } else {
          res = false;
        }

        return acc;
      }, 0);

      return res;
    }, true);
}

console.log(checkStepNumbers(systemNames, stepNumbers));
