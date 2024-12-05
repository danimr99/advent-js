(() => {
  type Shoe = {
    type: "I" | "R";
    size: number;
  };

  function organizeShoes(shoes: Shoe[]): number[] {
    const count = new Map<number, { I: number; R: number }>();
    const sizes: number[] = [];

    for (const { type, size } of shoes) {
      if (!count.has(size)) {
        count.set(size, { I: 0, R: 0 });
      }

      count.get(size)![type]++;

      if (count.get(size)!.I > 0 && count.get(size)!.R > 0) {
        sizes.push(size);
        count.get(size)!.I--;
        count.get(size)!.R--;
      }
    }

    return sizes;
  }

  const shoes: Shoe[] = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ]; // [38, 42]

  const shoes2: Shoe[] = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
  ]; // [38, 38]

  const shoes3: Shoe[] = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
  ]; // []

  console.log(organizeShoes(shoes));
  console.log(organizeShoes(shoes2));
  console.log(organizeShoes(shoes3));
})();
