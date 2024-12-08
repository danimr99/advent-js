from typing import List

def draw_race(indices: List[int], length: int) -> str:
  result = []

  for index, position in enumerate(indices):
    # Crear la pista con '~'
    lane = ["~"] * length
    reindeer_position = position if position >= 0 else length + position

    # Colocar el reno si no está en la posición inicial
    if position != 0:
      lane[reindeer_position] = "r"

    # Crear la línea con espacios y número de pista
    result.append(f"{' ' * (len(indices) - 1 - index)}{''.join(lane)} /{index + 1}")

  return "\n".join(result)
