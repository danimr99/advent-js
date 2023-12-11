export default function canReconfigure(from, to) {
  const reconfiguration = {};

  if (from.length !== to.length) return false;

  for (let i = 0; i < from.length; i++) {
    if (
      Object.keys(reconfiguration).includes(from[i]) &&
      reconfiguration[from[i]] !== to[i]
    ) {
      return false;
    }

    if (
      Object.values(reconfiguration).includes(to[i]) &&
      !Object.keys(reconfiguration).includes(from[i])
    ) {
      return false;
    }

    reconfiguration[from[i]] = to[i];
  }

  return true;
}

const from = "BAL";
const to = "LIB";
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/
