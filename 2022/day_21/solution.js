const gifts = Object.freeze([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]);

function printTable(gifts) {
  let table = "";

  const giftSectionTitles = gifts.map((gift) => gift.name);
  giftSectionTitles.push("Gift");
  const giftSectionLength = Math.max(
    ...giftSectionTitles.map((title) => title.length)
  );

  const quantitySectionTitles = gifts.map((gift) => gift.quantity.toString());
  quantitySectionTitles.push("Quantity");
  const quantitySectionLength = Math.max(
    ...quantitySectionTitles.map((title) => title.length)
  );

  table +=
    "+".repeat(2 + giftSectionLength + 3 + quantitySectionLength + 2) + "\n";
  table +=
    "| " +
    "Gift".padEnd(giftSectionLength) +
    " | " +
    "Quantity".padEnd(quantitySectionLength) +
    " |\n";
  table +=
    "| " +
    "-".repeat(giftSectionLength) +
    " | " +
    "-".repeat(quantitySectionLength) +
    " |\n";

  for (const gift of gifts) {
    table +=
      "| " +
      gift.name.padEnd(giftSectionLength) +
      " | " +
      gift.quantity.toString().padEnd(quantitySectionLength) +
      " |\n";
  }

  table += "*".repeat(2 + giftSectionLength + 3 + quantitySectionLength + 2);

  return table;
}

console.log(printTable(gifts));
