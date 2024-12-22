function fixGiftList(received, expected) {
  const countOccurrences = (list) => {
    return list.reduce((count, item) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    }, {});
  };

  const receivedCount = countOccurrences(received);
  const expectedCount = countOccurrences(expected);

  const missing = {};
  const extra = {};

  // Check for missing gifts
  for (const gift in expectedCount) {
    const missingQuantity = expectedCount[gift] - (receivedCount[gift] || 0);
    if (missingQuantity > 0) {
      missing[gift] = missingQuantity;
    }
  }

  // Check for extra gifts
  for (const gift in receivedCount) {
    const extraQuantity = receivedCount[gift] - (expectedCount[gift] || 0);
    if (extraQuantity > 0) {
      extra[gift] = extraQuantity;
    }
  }

  return { missing, extra };
}

console.log(
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"]
  )
); // { missing: { ball: 1 }, extra: { car: 1 } }

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
); // { missing: { ball: 1, kite: 1 }, extra: { train: 1 } }

console.log(
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"]
  )
); // { missing: { puzzle: 1, car: 2 }, extra: {} }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"])); // { missing: {}, extra: {} }
