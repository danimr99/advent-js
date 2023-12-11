export default function countDecorations(bigTree) {
  let count = 0;

  function countTree(tree) {
    count += tree.value;

    if (tree.left) countTree(tree.left);
    if (tree.right) countTree(tree.right);
  }

  countTree(bigTree);

  return count;
}

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

console.log(countDecorations(tree)); // 6
