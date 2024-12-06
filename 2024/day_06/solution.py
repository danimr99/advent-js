from typing import List

def in_box(box: List[str]) -> bool:
  # Iterate over the rows of the box, excluding the first and last rows
  for row in box[1:-1]:
    if "*" in row and 0 < row.index("*") < len(row) - 1:
      return True
    
  return False
