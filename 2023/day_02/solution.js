const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return gift.split("").every((letter) => materials.includes(letter));
  });
}

console.log(manufacture(gifts, materials));
