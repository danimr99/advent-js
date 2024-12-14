def compile(instructions):
  registers = {}
  pointer = 0

  while pointer < len(instructions):
    parts = instructions[pointer].split(" ")
    op = parts[0]
    arg1 = parts[1]
    arg2 = parts[2] if len(parts) > 2 else None

    if op == "MOV":
      registers[arg2] = registers.get(arg1, 0) if arg1.isalpha() else int(arg1)
    elif op == "INC":
      registers[arg1] = registers.get(arg1, 0) + 1
    elif op == "DEC":
      registers[arg1] = registers.get(arg1, 0) - 1
    elif op == "JMP":
      if registers.get(arg1, 0) == 0:
        pointer = int(arg2)
        continue

    pointer += 1

  return registers.get("A")
