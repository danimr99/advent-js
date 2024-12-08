function drawRace(indices, length) {
  const lanes = indices.map((position, index) => {
    // Initialize the lane with snow
    const lane = Array(length).fill("~");

    // Determine the reindeer's position
    let reindeerPos;

    if (position > 0) {
      reindeerPos = position;
    } else if (position < 0) {
      reindeerPos = length + position; // Calculate from the end
    }

    // Place the reindeer if applicable
    if (position !== 0) {
      lane[reindeerPos] = "r";
    }

    return lane.join("");
  });

  // Apply isometric formatting and add lane numbers
  return lanes
    .map(
      (lane, index) =>
        `${" ".repeat(indices.length - 1 - index)}${lane} /${index + 1}`
    )
    .join("\n");
}

console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));
