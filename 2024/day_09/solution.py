from typing import List, Literal

def move_train(board: List[str], mov: Literal['L', 'R', 'U', 'D']) -> Literal['crash', 'eat', 'none']:
  directions = {'L': (0, -1), 'R': (0, 1), 'U': (-1, 0), 'D': (1, 0)}
  dx, dy = directions[mov]

  # Find train's head (@)
  x = next(i for i, row in enumerate(board) if '@' in row)
  y = board[x].index('@')

  new_x, new_y = x + dx, y + dy

  # Validate position and return result
  if new_x < 0 or new_x >= len(board) or new_y < 0 or new_y >= len(board[0]):
      return 'crash'

  return {'@': 'crash', 'o': 'crash', '*': 'eat'}.get(board[new_x][new_y], 'none')
