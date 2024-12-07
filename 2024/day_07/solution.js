function fixPackages(packages) {
  let stack = [];
  let result = "";

  for (let i = 0; i < packages.length; i++) {
    if (packages[i] === "(") {
      stack.push(result);
      result = "";
    } else if (packages[i] === ")") {
      let temp = stack.pop();
      result = temp + result.split("").reverse().join("");
    } else {
      result += packages[i];
    }
  }

  return result;
}

console.log(fixPackages("a(cb)de")); // ➞ "abcde"
console.log(fixPackages("a(bc(def)g)h")); // ➞ "agdefcbh"
console.log(fixPackages("abc(def(gh)i)jk")); // ➞ "abcighfedjk"
console.log(fixPackages("a(b(c))e")); // ➞ "acbe"
