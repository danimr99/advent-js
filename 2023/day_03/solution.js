const original = "stepfor";
const modified = "stepor";

function findNaughtyStep(original, modified) {
  const length = Math.max(original.length, modified.length);

  for (let i = 0; i < length; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }

  return "";
}

console.log(findNaughtyStep(original, modified));
