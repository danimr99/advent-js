function treeHeight(tree) {
  // If the node is null, the height is 0
  if (tree === null) {
    return 0;
  }

  // Recursively calculate the height of the left and right subtrees
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  // The height of the current tree is the maximum of the heights of the left and right subtrees plus 1 (for the current node)
  return Math.max(leftHeight, rightHeight) + 1;
}

const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

console.log(treeHeight(tree)); // Returns: 3
