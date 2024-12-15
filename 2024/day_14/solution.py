def min_moves_to_stables(reindeer: list[int], stables: list[int]) -> int:
  # Order the reindeer and stables
  reindeer.sort()
  stables.sort()

  # Calculate the sum of the absolute differences between the reindeer and stables
  return sum(abs(r - s) for r, s in zip(reindeer, stables))
