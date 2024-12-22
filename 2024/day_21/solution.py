def tree_height(tree):
    # If the tree is None, the height is 0
    if tree is None:
        return 0

    # Recursively calculate the height of the left and right subtrees
    left_height = tree_height(tree.get('left'))
    right_height = tree_height(tree.get('right'))

    # The height of the current tree is the maximum of the heights of the left and right subtrees plus 1 (for the current tree)
    return max(left_height, right_height) + 1
