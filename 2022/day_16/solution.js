const message = ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `;

function fixLetter(letter) {
  return letter
    .trim()
    .replace(/(\s+)/g, " ")
    .replace(/,(?=[^\s])/g, ", ")
    .replace(/\s*([,.?])/g, "$1")
    .replace(/[?]+/g, "?")
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/([^.?!])$/, "$1.")
    .replace(
      /((?:[^.?!\s]))([^.?!]*)([.?!])/g,
      (_, p1, p2, p3) => p1.toUpperCase() + p2 + p3
    );
}

console.log(fixLetter(message));
