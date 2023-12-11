export default function missingReindeer(ids) {
  return [...Array(ids.length + 1).keys()].find((id) => !ids.includes(id));
}

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
