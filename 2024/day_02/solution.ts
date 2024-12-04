(() => {
  const frame1: string[] = ["midu", "madeval", "educalvolpz"];
  const frame2: string[] = ["midu"];
  const frame3: string[] = ["a", "bb", "ccc"];

  function createFrame(names: string[]): string {
    const longestName: number = Math.max(...names.map((name) => name.length));

    const border: string = "*".repeat(longestName + 4);
    const result: string[] = [border];

    names.forEach((name) => {
      const spaces: string = " ".repeat(longestName - name.length);
      result.push(`* ${name}${spaces} *`);
    });

    result.push(border);

    return result.join("\n");
  }

  console.log(createFrame(frame1));
  console.log(createFrame(frame2));
  console.log(createFrame(frame3));
})();
