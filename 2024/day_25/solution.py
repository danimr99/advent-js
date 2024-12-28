def execute(code: str) -> int:
    counter = 0
    pointer = 0

    while pointer < len(code):
        char = code[pointer]

        if char == "+":
            counter += 1
        elif char == "-":
            counter -= 1
        elif char == "[":
            if counter == 0:
                pointer = code.index("]", pointer)
        elif char == "]":
            if counter != 0:
                pointer = code.rindex("[", 0, pointer)
                continue
        elif char == "{":
            if counter == 0:
                pointer = code.index("}", pointer)
        
        pointer += 1

    return counter
