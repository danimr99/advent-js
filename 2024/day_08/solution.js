function drawRace(indices, length) {
  return indices
    .map((position, index) => {
      const lane = Array(length).fill("~");
      const reindeerPosition = position >= 0 ? position : length + position;

      if (position !== 0) {
        lane[reindeerPosition] = "r";
      }

      return `${" ".repeat(indices.length - 1 - index)}${lane.join("")} /${
        index + 1
      }`;
    })
    .join("\n");
}

console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));
