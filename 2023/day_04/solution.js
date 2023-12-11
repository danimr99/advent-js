const msg = "sa(u(cla)atn)s";

function decode(message) {
  let stack = [];

  for (let char of message) {
    if (char === ")") {
      let reversed = "";

      while (stack[stack.length - 1] !== "(") {
        reversed += stack.pop();
      }

      stack.pop();
      stack.push(...reversed);
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(decode(msg));
