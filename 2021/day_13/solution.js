export default function wrapGifts(gifts) {
  const maxLength = Math.max(...gifts.map((gift) => gift.length));
  const wrappedGifts = gifts.map((gift) => `*${gift}*`);

  wrappedGifts.unshift("*".repeat(maxLength + 2));
  wrappedGifts.push("*".repeat(maxLength + 2));

  return wrappedGifts;
}

console.log(wrapGifts(["📷", "⚽️"]));
