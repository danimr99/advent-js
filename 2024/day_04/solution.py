def create_xmas_tree(height: int, ornament: str) -> str:
  tree = ""

  # Create tree rows
  for i in range(1, height + 1):
    spaces = height - i
    stars = i * 2 - 1
    tree += "_" * spaces + ornament * stars + "_" * spaces + "\n"

  # Create tree base
  base = ("_" * (height - 1) + "#" + "_" * (height - 1) + "\n") * 2

  # Delete last newline character
  tree += base.rstrip("\n")  

  return tree
