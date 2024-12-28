function execute(code) {
  let counter = 0;
  let pointer = 0;

  while (pointer < code.length) {
    const char = code[pointer];

    switch (char) {
      case "+":
        counter++;
        break;
      case "-":
        counter--;
        break;
      case "[":
        if (counter === 0) {
          let brackets = 1;
          while (brackets > 0) {
            pointer++;
            if (code[pointer] === "[") brackets++;
            if (code[pointer] === "]") brackets--;
          }
        }
        break;
      case "]":
        if (counter !== 0) {
          let brackets = 1;
          while (brackets > 0) {
            pointer--;
            if (code[pointer] === "]") brackets++;
            if (code[pointer] === "[") brackets--;
          }
          continue;
        }
        break;
      case "{":
        if (counter === 0) {
          let braces = 1;
          while (braces > 0) {
            pointer++;
            if (code[pointer] === "{") braces++;
            if (code[pointer] === "}") braces--;
          }
        }
        break;
    }
    pointer++;
  }

  return counter;
}

console.log(execute("+++")); // 3
console.log(execute("+--")); // -1
console.log(execute(">+++[-]")); // 0
console.log(execute(">>>+{++}")); // 3
console.log(execute("+{[-]+}+")); // 2
console.log(execute("{+}{+}{+}")); // 0
console.log(execute("------[+]++")); // 2
console.log(execute("-[++{-}]+{++++}")); // 5
