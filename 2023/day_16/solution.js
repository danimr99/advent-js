function transformTree(tree) {
  const buildTree = (index) => {
    if (index >= tree.length || tree[index] === null) return null;

    const node = {
      value: tree[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };

    return node;
  };

  const treeObject = buildTree(0);
  return treeObject;
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
