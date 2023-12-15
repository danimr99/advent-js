function organizeGifts(gifts) {
  const giftCounts = gifts.match(/\d+/g);
  const giftNames = gifts.match(/[^0-9]/g);

  let response = "";
  let index = 0;

  for (let count of giftCounts) {
    const name = giftNames[index];
    let result = "";

    count = +count;

    result += `[${name}]`.repeat(count / 50);
    count %= 50;

    result += `{${name}}`.repeat(count / 10);
    count %= 10;

    result += `(${name.repeat(count)})`.repeat(+!!count);

    response += result;
    index++;
  }

  return response;
}

console.log(organizeGifts("76a11b"));
