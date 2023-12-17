function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const interval of intervals) {
    const lastMergedInterval = result[result.length - 1];

    if (interval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
}

console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [[1, 6], [8, 10]]
