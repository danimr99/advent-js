function maxGifts(houses) {
  let include = 0;
  let exclude = 0;
  let doNotIncludePrevious;

  for (let house of houses) {
    doNotIncludePrevious = [exclude, include][+(include > exclude)];

    include = exclude + house;
    exclude = doNotIncludePrevious;
  }

  return [exclude, include][+(include > exclude)];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
