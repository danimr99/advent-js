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
          pointer = code.indexOf("]", pointer);
        }
        break;
      case "]":
        if (counter !== 0) {
          pointer = code.lastIndexOf("[", pointer);
          continue;
        }
        break;
      case "{":
        if (counter === 0) {
          pointer = code.indexOf("}", pointer);
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
