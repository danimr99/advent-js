export default function decodeNumber(symbols) {
  const CODES = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  return symbols
    .split("")
    .map((symbol) => CODES[symbol] || NaN)
    .reduce(
      (result, value, index, array) =>
        result + (value < array[index + 1] ? -value : value),
      0
    );
}

console.log(decodeNumber("...")); // 3
console.log(decodeNumber(".,")); // 4 (5 - 1)
console.log(decodeNumber(",.")); // 6 (5 + 1)
console.log(decodeNumber(",...")); // 8 (5 + 3)
console.log(decodeNumber(".........!")); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber(".;")); // 49 (50 - 1)
console.log(decodeNumber("..,")); // 5 (-1 + 1 + 5)
console.log(decodeNumber("..,!")); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber(".;!")); // 49 (-1 -50 + 100)
console.log(decodeNumber("!!!")); // 300
console.log(decodeNumber(";!")); // 50
console.log(decodeNumber(";.W")); // NaN
