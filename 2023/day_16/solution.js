function transformTree(tree) {
  function buildBranch(index) {
    const value = tree[index];

    if (value == null) return null;

    const nodeIndex = index * 2;

    return {
      value: value,
      left: buildBranch(nodeIndex + 1),
      right: buildBranch(nodeIndex + 2),
    };
  }

  const treeObject = buildBranch(0);
  return treeObject;
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
