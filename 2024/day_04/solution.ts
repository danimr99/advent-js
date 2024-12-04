(() => {
  function createXmasTree(height: number, ornament: string): string {
    let tree = "";

    for (let i = 1; i <= height; i++) {
      const spaces = height - i;
      const stars = i * 2 - 1;

      tree +=
        "_".repeat(spaces) + ornament.repeat(stars) + "_".repeat(spaces) + "\n";
    }

    tree += `${"_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n"}`
      .repeat(2)
      .slice(0, -1);

    return tree;
  }

  console.log(createXmasTree(5, "*"), "\n");
  console.log(createXmasTree(3, "+"), "\n");
  console.log(createXmasTree(6, "@"), "\n");
})();
