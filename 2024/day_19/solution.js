function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const weights = [10, 5, 2, 1];

  let boxes = [];

  for (let w of weights) {
    while (weight >= w) {
      weight -= w;
      boxes.push([...boxRepresentations[w]]);
    }
  }

  boxes.reverse();

  let stack = `${boxes[0].join("\n")}\n`;

  for (let i = 1; i < boxes.length; ++i) {
    let box = [...boxes[i]];

    box[0] = box[0].slice(boxes[i - 1][0].length);
    stack = `${stack.slice(0, -1)}${box.map((l) => l.trim()).join("\n")}\n`;
  }

  return stack.slice(0, -1);
}

console.log(distributeWeight(1));
// Returns:
//  _
// |_|

console.log(distributeWeight(2));
// Returns:
//  ___
// |___|

console.log(distributeWeight(3));
// Returns:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Returns:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Returns:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Returns:
//  _
// |_|___
// |     |
// |_____|
