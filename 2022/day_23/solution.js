const commands = [
  "MOV 5,V00", // V00 is 5
  "MOV 10,V01", // V01 is 10
  "DEC V00", // V00 is now 4
  "ADD V00,V01", // V00 = V00 + V01 = 14
];

function executeCommands(commands) {
  const CPU = {
    MEMO: {
      V00: 0,
      V01: 0,
      V02: 0,
      V03: 0,
      V04: 0,
      V05: 0,
      V06: 0,
      V07: 0,
    },
    MOV(a, b) {
      CPU.MEMO[b] = CPU.MEMO[a] || Number(a);
    },
    ADD(a, b) {
      CPU.MEMO[a] = (CPU.MEMO[a] + CPU.MEMO[b]) % 256;
      CPU.MEMO[a] = (CPU.MEMO[a] + 256) % 256;
    },
    DEC(v) {
      CPU.MEMO[v] = (CPU.MEMO[v] - 1 + 256) % 256;
    },
    INC(v) {
      CPU.MEMO[v] = (CPU.MEMO[v] + 1) % 256;
    },
    JMP(i, index) {
      while (CPU.MEMO.V00 !== 0) {
        for (let j = i; j < index; j++) {
          const [func, param1, param2 = func === "JMP" ? index : null] =
            commands[j].split(/[ ,]+/);
          CPU[func](param1, param2);
        }
      }
    },
  };

  commands.forEach((command, index) => {
    const [func, param1, param2 = func === "JMP" ? index : null] =
      command.split(/[ ,]+/);
    CPU[func](param1, param2);
  });

  return Object.values(CPU.MEMO);
}

console.log(executeCommands(commands));
