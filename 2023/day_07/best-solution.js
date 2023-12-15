function drawGift(size, symbol) {
  let backgroundSize = size - 2;

  backgroundSize += +!(backgroundSize + 1);

  let response = "";
  let topCenter = "";
  let bottomCenter = "";

  for (const row of [...Array.from({ length: backgroundSize }).keys()]) {
    const line =
      "#" + symbol.repeat(backgroundSize) + "#" + symbol.repeat(row) + "#";
    bottomCenter = line + "\n" + bottomCenter;
    topCenter += " ".repeat(backgroundSize - row) + line + "\n";
  }

  response =
    " ".repeat(size - 1) +
    "#".repeat(size) +
    "\n" +
    (
      topCenter +
      "#".repeat(size) +
      symbol.repeat(backgroundSize) +
      "#" +
      "\n" +
      bottomCenter +
      "#".repeat(size) +
      "\n"
    ).repeat(+!!(size - 1));

  return response;
}

console.log(drawGift(4, "+"));
