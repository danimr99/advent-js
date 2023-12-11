const gifts = Object.freeze(["cat", "game", "socks"]);

function wrapping(gifts) {
  return gifts.map((gift) => {
    const wrapper = "*".repeat(gift.length + 2);
    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
}

console.log(wrapping(gifts));
