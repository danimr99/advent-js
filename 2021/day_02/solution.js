const letter = "bici coche balón _playstation bici coche peluche";

export default function listGifts(letter) {
  return letter
    .trim()
    .split(" ")
    .filter((gift) => gift[0] !== "_")
    .reduce((acc, gift) => {
      acc[gift] = (acc[gift] || 0) + 1;
      return acc;
    }, {});
}

console.log(listGifts(letter));
