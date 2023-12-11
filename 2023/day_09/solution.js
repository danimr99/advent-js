function adjustLights(lights) {
  let changesCounter = 0;

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] === lights[i + 1]) {
      lights[i + 1] = lights[i + 1] === "🔴" ? "🟢" : "🔴";
      changesCounter++;
    }
  }

  return Math.min(changesCounter, lights.length - changesCounter);
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (they are already alternating)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (you change the second light to 🟢)
