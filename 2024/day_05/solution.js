function organizeShoes(shoes) {
  // Count how many shoes of each size and type we have
  const count = {};

  for (const shoe of shoes) {
    if (!count[shoe.size]) {
      count[shoe.size] = { I: 0, R: 0 };
    }

    count[shoe.size][shoe.type]++;
  }

  // Count how many pairs we can make
  const sizes = [];

  for (const size in count) {
    while (count[size].I > 0 && count[size].R > 0) {
      sizes.push(Number(size));
      count[size].I--;
      count[size].R--;
    }
  }

  return sizes;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
]; // [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
]; // [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
]; // []

console.log(organizeShoes(shoes));
console.log(organizeShoes(shoes2));
console.log(organizeShoes(shoes3));
