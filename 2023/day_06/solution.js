const movements = ">>*<";

function maxDistance(movements) {
  const movementOptions = {
    "<": -1,
    ">": 1,
  };

  let a = 0;
  let b = 0;

  for (const step of movements) {
    step !== "*" ? (a += movementOptions[step]) : b++;
  }

  return Math.abs(a) + b;
}

console.log(maxDistance(movements));
