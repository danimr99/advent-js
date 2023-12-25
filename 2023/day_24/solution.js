function getStaircasePaths(steps, maxJump) {
  if (steps === 0) return [[]];

  let result = [];

  for (let i = 1; i <= Math.min(steps, maxJump); i++) {
    const paths = getStaircasePaths(steps - i, maxJump);
    const updatedPaths = paths.map((path) => [i, ...path]);
    result = result.concat(updatedPaths);
  }

  return result;
}

console.log(getStaircasePaths(3, 3));
