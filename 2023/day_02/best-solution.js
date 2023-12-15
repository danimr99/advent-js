const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  return gifts.filter((g) => {
    const x = [...new Set(...[g + materials])];

    return x.length == materials.length;
  });
}

console.log(manufacture(gifts, materials));
