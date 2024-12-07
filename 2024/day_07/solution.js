function fixPackages(packages) {
  while (packages.includes("(")) {
    packages = packages.replace(/\(([^()]*)\)/g, (_, p1) =>
      p1.split("").reverse().join("")
    );
  }

  return packages;
}

console.log(fixPackages("a(cb)de")); // ➞ "abcde"
console.log(fixPackages("a(bc(def)g)h")); // ➞ "agdefcbh"
console.log(fixPackages("abc(def(gh)i)jk")); // ➞ "abcighfedjk"
console.log(fixPackages("a(b(c))e")); // ➞ "acbe"
