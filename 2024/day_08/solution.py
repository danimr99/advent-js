from typing import List

def draw_race(indices: List[int], length: int) -> str:
  result = []

  for index, position in enumerate(indices):
    # Create the lane with '~' characters
    lane = ["~"] * length
    reindeer_position = position if position >= 0 else length + position

    # If the reindeer is not in the starting position, mark it with 'r'
    if position != 0:
      lane[reindeer_position] = "r"

    # Add the lane and the index of the reindeer to the result
    result.append(f"{' ' * (len(indices) - 1 - index)}{''.join(lane)} /{index + 1}")

  return "\n".join(result)
