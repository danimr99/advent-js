const giftIds = [5, 1, 5, 1];

function findFirstRepeated(gifts) {
  return (
    gifts.find((gift, index, array) => array.indexOf(gift) !== index) ?? -1
  );
}

console.log(findFirstRepeated(giftIds));
