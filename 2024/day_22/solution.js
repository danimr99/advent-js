function generateGiftSets(gifts) {
  const result = [];

  // Helper function to generate combinations of size k
  function generateCombinations(start, currentCombo, size) {
    if (currentCombo.length === size) {
      result.push([...currentCombo]);
      return;
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombo.push(gifts[i]);
      generateCombinations(i + 1, currentCombo, size);
      currentCombo.pop();
    }
  }

  // Generate combinations of all sizes from 1 to n
  for (let size = 1; size <= gifts.length; size++) {
    generateCombinations(0, [], size);
  }

  return result;
}

console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
