const toys = Object.freeze(["ball", "doll", "car", "puzzle"]);
const positions = Object.freeze([2, 3, 1, 0]);

function sortToys(toys, positions) {
  return toys
    .map((toy, i) => ({ [positions[i]]: toy }))
    .sort((a, b) => Object.keys(a) - Object.keys(b))
    .map((toy) => Object.values(toy)[0]);
}

console.log(sortToys(toys, positions));
