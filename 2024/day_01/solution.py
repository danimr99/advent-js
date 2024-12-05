def prepare_gifts(gifts: list[int | float]) -> list[int | float]:
  # Filter non-numeric values
  gifts = [gift for gift in gifts if isinstance(gift, (int, float))]
  
  # Delete duplicates keeping the original order
  seen = set()
  unique_gifts = []
  
  for gift in gifts:
    if gift not in seen:
      seen.add(gift)
      unique_gifts.append(gift)

  # Sort the gifts in ascending order
  return sorted(unique_gifts)

def main():
  gifts1 = [3, 1, 2, 3, 4, 2, 5];
  gifts2 = [6, 5, 5, 5, 5];
  gifts3 = [];

  print(prepare_gifts(gifts1)) # [1, 2, 3, 4, 5]
  print(prepare_gifts(gifts2)) # [5, 6]
  print(prepare_gifts(gifts3)) # []
