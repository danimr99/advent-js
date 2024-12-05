from typing import List, Dict, Literal

class Shoe:
  def __init__(self, shoe_type: Literal["I", "R"], size: int):
    self.type = shoe_type
    self.size = size

def organize_shoes(shoes: List[Shoe]) -> List[int]:
  count: Dict[int, Dict[str, int]] = {}
  sizes: List[int] = []

  for shoe in shoes:
    shoe_type = shoe.type
    size = shoe.size

    if size not in count:
      count[size] = {"I": 0, "R": 0}

    count[size][shoe_type] += 1

    if count[size]["I"] > 0 and count[size]["R"] > 0:
      sizes.append(size)
      count[size]["I"] -= 1
      count[size]["R"] -= 1

  return sizes
