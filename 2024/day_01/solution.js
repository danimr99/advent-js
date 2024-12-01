const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const gifts2 = [6, 5, 5, 5, 5];
const gifts3 = [];

function prepareGifts(gifts) {
  const uniqueGifts = [...new Set(gifts)];
  return uniqueGifts.sort((a, b) => a - b);
}

console.log(prepareGifts(gifts1));
console.log(prepareGifts(gifts2));
console.log(prepareGifts(gifts3));
