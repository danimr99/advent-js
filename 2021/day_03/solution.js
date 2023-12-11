export default function isValid(letter) {
  for (const str of ["{", "}", "[", "]"])
    if (letter.includes(str)) return false;

  const containers = {};
  const stack = [];

  letter.split("").forEach((char, i) => {
    if (char === ")") containers[i] = stack.pop();
    if (char === "(") stack.push(i);
  });

  for (const value in containers)
    if (!letter.substring(containers[value] + 1, +value)) return false;

  return !stack.length;
}

console.log(isValid("bici coche (balón) bici coche peluche"));
console.log(isValid("(muñeca) consola bici"));
console.log(isValid("bici coche (balón bici coche"));
console.log(isValid("peluche (bici [coche) bici coche balón"));
console.log(isValid("(peluche {) bici"));
console.log(isValid("() bici"));
