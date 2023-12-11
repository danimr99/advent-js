function checkPart(part) {
  return (
    part === part.split("").reverse().join("") ||
    part.split("").some((_, index) => {
      const newPart = part.slice(0, index) + part.slice(index + 1);
      return newPart === newPart.split("").reverse().join("");
    })
  );
}

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
