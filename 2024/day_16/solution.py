def remove_snow(s: str) -> str:
  stack = []
    
  for pile in s:
    if stack and stack[-1] == pile:
      stack.pop()
    else:
      stack.append(pile)
    
  return ''.join(stack)
