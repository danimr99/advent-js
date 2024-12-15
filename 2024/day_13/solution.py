def is_robot_back(moves: str) -> bool | list[int]:
  x, y = 0, 0
  visited = set()

  move_delta = {
    'L': (-1, 0),
    'R': (1, 0),
    'U': (0, 1),
    'D': (0, -1),
  }

  def invert_move(move: str) -> str:
    inverted = {
      'L': 'R',
      'R': 'L',
      'U': 'D',
      'D': 'U',
    }

    return inverted.get(move, move)

  i = 0
  while i < len(moves):
    move = moves[i]
    intensity = 1

    if move == '*':
      intensity = 2
      i += 1
      move = moves[i]
    elif move == '!':
      i += 1
      move = invert_move(moves[i])
    elif move == '?':
      i += 1
      next_move = moves[i]
      if next_move in visited:
        i += 1
        continue
      move = next_move

    if move in move_delta:
      dx, dy = move_delta[move]
      x += dx * intensity
      y += dy * intensity
      visited.add(move)
      
    i += 1

  return True if x == 0 and y == 0 else [x, y]
