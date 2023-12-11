export default function canCarry(capacity, trip) {
  const minPosition = Math.min(...trip.map((t) => t[1]));
  const maxPosition = Math.max(...trip.map((t) => t[2]));

  const giftsPerStop = [...Array(maxPosition - minPosition).keys()].map(
    (index) => {
      const stop = index + minPosition;
      return trip
        .filter(([_, pickup, delivery]) => stop >= pickup && stop < delivery)
        .reduce((total, [gifts]) => total + gifts, 0);
    }
  );

  return giftsPerStop.every((giftsQuantity) => giftsQuantity <= capacity);
}

console.log(
  canCarry(4, [
    [2, 5, 8],
    [3, 6, 10],
  ])
); // false

console.log(
  canCarry(3, [
    [1, 1, 5],
    [2, 2, 10],
  ])
); // true

console.log(
  canCarry(3, [
    [2, 1, 5],
    [3, 5, 7],
  ])
); // true

console.log(
  canCarry(4, [
    [2, 3, 8],
    [2, 5, 7],
  ])
); // true

console.log(canCarry(1, [[2, 3, 8]])); // false

console.log(
  canCarry(2, [
    [1, 2, 4],
    [2, 3, 8],
  ])
); // false
