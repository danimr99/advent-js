def calculate_price(ornaments: str) -> int:
  ornament_values = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  }

  total_price = 0
  previous_value = 0

  for current in ornaments:
    # Check for invalid ornaments
    if current not in ornament_values:
      return None

    current_value = ornament_values[current]

    # Determine whether to add or subtract the value
    if previous_value < current_value:
      total_price += current_value - 2 * previous_value
    else:
      total_price += current_value

  previous_value = current_value

  return total_price
