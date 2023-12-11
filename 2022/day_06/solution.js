function createCube(size) {
  let cube = "";

  for (let i = 0; i < size; i++) {
    cube +=
      " ".repeat(size - (i + 1)) +
      "/\\".repeat(i + 1) +
      "_\\".repeat(size) +
      "\n";
  }

  for (let i = 0; i < size; i++) {
    cube +=
      " ".repeat(i) +
      "\\/".repeat(size - i) +
      "_/".repeat(size) +
      (i < size - 1 ? "\n" : "");
  }

  return cube;
}

console.log(createCube(3));
