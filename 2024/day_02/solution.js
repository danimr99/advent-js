const frame1 = ["midu", "madeval", "educalvolpz"];
const frame2 = ["midu"];
const frame3 = ["a", "bb", "ccc"];

function createFrame(names) {
  const max = names.reduce(
    (acc, name) => (name.length > acc ? name.length : acc),
    0
  );

  const border = "*".repeat(max + 4);
  const result = [border];

  names.forEach((name) => {
    const spaces = " ".repeat(max - name.length);
    result.push(`* ${name}${spaces} *`);
  });

  result.push(border);
  return result.join("\n");
}

console.log(createFrame(frame1));
console.log(createFrame(frame2));
console.log(createFrame(frame3));
