function getIndexsForPalindrome(word) {
  const reversed = word.split("").reverse().join("");

  if (word === reversed) {
    return [];
  }

  const chars = word.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) {
      for (let j = 0; j < word.length; j++) {
        if (
          chars[j] === chars[chars.length - 1 - i] &&
          j !== chars.length - 1 - i
        ) {
          [chars[i], chars[j]] = [chars[j], chars[i]];
          if (chars.join("") === chars.slice().reverse().join("")) {
            return i < j ? [i, j] : [j, i];
          } else {
            [chars[i], chars[j]] = [chars[j], chars[i]];
          }
        }
      }
    }
  }

  return null;
}

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
