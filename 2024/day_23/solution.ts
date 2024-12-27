(() => {
  function findMissingNumbers(nums: number[]): number[] {
    // Get the maximum boundary (highest number)
    const max = Math.max(Math.max(...nums));

    // Convert input array to Set for O(1) lookups
    const numSet = new Set(nums);

    // Check each number from 1 to max
    const missing: number[] = [];

    for (let i = 1; i <= max; i++) {
      if (!numSet.has(i)) {
        missing.push(i);
      }
    }

    return missing;
  }

  console.log(findMissingNumbers([1, 2, 4, 6])); // [3, 5]
  console.log(findMissingNumbers([4, 8, 7, 2])); // [1, 3, 5, 6]
  console.log(findMissingNumbers([3, 2, 1, 1])); // []
  console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])); // [4]
})();
