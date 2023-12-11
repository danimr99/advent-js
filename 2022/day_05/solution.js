const giftsCities = Object.freeze([12, 3, 11, 5, 7]);
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return (
    giftsCities
      // Generate all possible combinations of cities
      .reduce((a, v) => a.concat(a.map((d) => [v].concat(d))), [[]])
      // Filter out the combinations that have less than 1 city or more than maxCities cities.
      .filter((cities) => cities.length > 0)
      .filter((cities) => cities.length <= maxCities)
      // Calculate the total number of gifts for each remaining combination
      .map((conj) => conj.reduce((a, b) => (a += b)))
      // Filters out the combinations that have a total number of gifts that exceeds maxGifts
      .filter((cities) => cities <= maxGifts)
      // Find the maximum sum of gifts among the remaining combinations
      .reduce((res, item) => (item > res ? (res = item) : res), 0)
  );
}

console.log(getMaxGifts(giftsCities, maxGifts, maxCities));
