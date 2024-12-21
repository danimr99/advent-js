def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
  directions = [
    (-1, -1), (-1, 0), (-1, 1),
    (0, -1),          (0, 1),
    (1, -1), (1, 0), (1, 1)
  ]

  result = []

  for row_index, row in enumerate(grid):
    row_result = []
    
    for column_index in range(len(row)):
      count = 0
      
      for dx, dy in directions:
        x, y = row_index + dx, column_index + dy

        if 0 <= x < len(grid) and 0 <= y < len(row) and grid[x][y]:
          count += 1
      
      row_result.append(count)

    result.append(row_result)

  return result
