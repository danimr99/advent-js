const gifts = Object.freeze(["game", "bike", "book", "toy"]);
const maxWeight = 10;

function carryGifts(gifts, maxWeight) {
  return (
    gifts
      .join(" ")
      .match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, "g")) || []
  );
}

console.log(carryGifts(gifts, maxWeight));
