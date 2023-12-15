function getIndexsForPalindrome(word) {
  let result = null;
  for (const i of Array.from({ length: word.length }).keys()) {
    for (const j of Array.from({ length: word.length }).keys()) {
      let swapped = [...word];
      let temp = word[i];
      swapped[i] = word[j];
      swapped[j] = temp;

      let leftHalf = swapped.slice(0, Math.floor(word.length / 2)).join("");
      let rightHalf = swapped
        .slice(Math.ceil(word.length / 2))
        .reverse()
        .join("");

      result = [
        [null, [[], [i, j]][+(i + j > 0)]][+(leftHalf == rightHalf)],
        result,
      ][+!!result];
    }
  }
  return result;
}

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
