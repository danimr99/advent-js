const a1 = Object.freeze(["bike", "car", "bike", "bike"]);
const a2 = Object.freeze(["car", "bike", "doll", "car"]);
const a3 = Object.freeze(["bike", "pc", "pc"]);

function getGiftsToRefill(a1, a2, a3) {
  const inventory = {};

  const stores = [new Set(a1), new Set(a2), new Set(a3)];
  stores.forEach((store) => {
    store.forEach((gift) => {
      inventory[gift] = inventory[gift] ? inventory[gift] + 1 : 1;
    });
  });

  return Object.keys(inventory).filter((gift) => inventory[gift] < 2);
}

console.log(getGiftsToRefill(a1, a2, a3));
