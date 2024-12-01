const frame1 = ["midu", "madeval", "educalvolpz"];
const frame2 = ["midu"];
const frame3 = ["a", "bb", "ccc"];

function createFrame(names) {
  const longestName = Math.max(...names.map((name) => name.length));

  const border = "*".repeat(longestName + 4);
  const result = [border];

  names.forEach((name) => {
    const spaces = " ".repeat(longestName - name.length);
    result.push(`* ${name}${spaces} *`);
  });

  result.push(border);

  return result.join("\n");
}

console.log(createFrame(frame1));
console.log(createFrame(frame2));
console.log(createFrame(frame3));
