function organizeInventory(inventory) {
  const result = {};

  for (const { name, quantity, category } of inventory) {
    result[category] = {
      ...result[category],
      [name]: (result[category]?.[name] || 0) + quantity,
    };
  }

  return result;
}

const inventary1 = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

const inventary2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

console.log(organizeInventory(inventary1));
console.log(organizeInventory(inventary2));
