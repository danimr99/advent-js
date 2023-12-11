function decorateTree(base) {
  const formula = Object.freeze({
    BB: "B",
    PR: "B",
    RP: "B",
    BR: "P",
    PP: "P",
    RB: "P",
    BP: "R",
    PB: "R",
    RR: "R",
  });

  return base
    .split(" ")
    .slice(1)
    .reduce(
      (tree) => {
        const top = tree[0].split(" ");
        return [
          top
            .slice(0, -1)
            .reduce((acc, x, i) => {
              return [...acc, formula[x + top[i + 1]]];
            }, [])
            .join(" "),
          ...tree,
        ];
      },
      [base]
    );
}

console.log(decorateTree("B P R P"));
