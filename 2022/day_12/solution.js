const distance = 30;
const sleighs = Object.freeze([
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 },
]);

function selectSleigh(distance, sleighs) {
  const availableSleighs = sleighs.filter(
    (sleigh) => sleigh.consumption * distance <= 20
  );

  if (availableSleighs.length === 0) return null;

  const bestSleigh = availableSleighs.reduce((bestSleigh, sleigh) =>
    sleigh.consumption * distance > bestSleigh.consumption * distance
      ? sleigh
      : bestSleigh
  );

  return bestSleigh.name;
}

console.log(selectSleigh(distance, sleighs));
