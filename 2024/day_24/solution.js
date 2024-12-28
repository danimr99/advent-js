function isTreesSynchronized(tree1, tree2) {
  function mirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;

    return (
      t1.value === t2.value &&
      mirror(t1.left, t2.right) &&
      mirror(t1.right, t2.left)
    );
  }

  return [mirror(tree1, tree2), tree1?.value];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })); // [false, '🎅']
