export default function pangram(letter) {
  const ALPHABET = "abcdefghijklmnñopqrstuvwxyz";
  const TRANSFORMATIONS = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ä: "a",
    ë: "e",
    ï: "i",
    ö: "o",
    ü: "u",
  };

  const uniqueOccurrences = new Set(
    letter
      .toLowerCase()
      .split("")
      .filter((char) => char !== " " && ALPHABET.includes(char))
      .map((char) => TRANSFORMATIONS[char] || char)
  );

  return uniqueOccurrences.size === ALPHABET.length;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true

console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false

console.log(pangram("De la a a la z, nos faltan letras")); // false
