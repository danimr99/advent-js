const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

function fitsInOneBox(boxes) {
  const sortedBoxes = boxes.sort((a, b) => {
    return a.l !== b.l ? b.l - a.l : a.w !== b.w ? b.w - a.w : b.h - a.h;
  });

  for (let index = sortedBoxes.length - 1; index > 0; index--) {
    const currentBox = sortedBoxes[index];
    const nextBox = sortedBoxes[index - 1];

    if (
      currentBox.l >= nextBox.l ||
      currentBox.w >= nextBox.w ||
      currentBox.h >= nextBox.h
    ) {
      return false;
    }
  }

  return true;
}

console.log(fitsInOneBox(boxes));
