function compile(instructions) {
  const registers = {};
  let pointer = 0;

  while (pointer < instructions.length) {
    const [op, arg1, arg2] = instructions[pointer].split(" ");

    switch (op) {
      case "MOV":
        registers[arg2] = isNaN(arg1) ? registers[arg1] || 0 : Number(arg1);
        break;
      case "INC":
        registers[arg1] = (registers[arg1] || 0) + 1;
        break;
      case "DEC":
        registers[arg1] = (registers[arg1] || 0) - 1;
        break;
      case "JMP":
        if ((registers[arg1] || 0) === 0) {
          pointer = Number(arg2);
          continue;
        }

        break;
    }

    pointer++;
  }

  return registers["A"];
}

const instructions = ["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"];

console.log(compile(instructions)); // -> 2
