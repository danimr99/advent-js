function checkIsValidCopy(original, copy) {
  let isValidCopy = true;
  let index = 0;

  for (const letter of original) {
    const copyLetter = copy[index++];

    const isValidLetter = [
      letter.toLowerCase(),
      "#",
      "+",
      ":",
      ".",
      " ",
    ].includes(copyLetter);

    const isCopyLetterBlankSpace = copyLetter === " ";
    const isLetterBlankSpace = letter === " ";

    const isValidCharacter = [isValidLetter, isCopyLetterBlankSpace][
      +isLetterBlankSpace
    ];

    isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy];
  }

  return isValidCopy;
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")); // true
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")); // false (for the initial p)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (there is a # where it should not be)
