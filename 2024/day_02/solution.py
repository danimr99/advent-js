def create_frame(names: list[str]) -> str:
  # Get the longest name in the list
  longest_name = max(len(name) for name in names) if names else 0

  # Create the top border
  border = "*" * (longest_name + 4)
  result = [border]

  # Generate the lines with names and necessary spaces
  for name in names:
    spaces = " " * (longest_name - len(name))
    result.append(f"* {name}{spaces} *")

  # Add the bottom border
  result.append(border)

  # Join the result into a single string separated by line breaks
  return "\n".join(result)
