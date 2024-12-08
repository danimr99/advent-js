(() => {
  function drawRace(indices: number[], length: number): string {
    const result: string[] = [];

    for (const [index, position] of indices.entries()) {
      const lane = Array(length).fill("~");
      const reindeerPosition = position >= 0 ? position : length + position;

      if (position !== 0) {
        lane[reindeerPosition] = "r";
      }

      result.push(
        `${" ".repeat(indices.length - 1 - index)}${lane.join("")} /${
          index + 1
        }`
      );
    }

    return result.join("\n");
  }

  console.log(drawRace([0, 5, -3], 10));
  console.log(drawRace([2, -1, 0, 5], 8));
  console.log(drawRace([3, 7, -2], 12));
})();
