function getStaircasePaths(steps, maxJump) {
  const paths = [];
  paths[0] = [[]];

  let currentSteps = 1;
  const stepsArray = Array.from({
    length: steps,
  });

  for (const _ of stepsArray) {
    paths[currentSteps] = [];

    let i = 1;
    const jumpArray = Array.from({
      length: Math.min(currentSteps, maxJump),
    });

    for (const _ of jumpArray) {
      for (const path of paths[currentSteps - i]) {
        paths[currentSteps].push([i, ...path]);
      }

      i++;
    }

    currentSteps++;
  }

  return paths[steps];
}
