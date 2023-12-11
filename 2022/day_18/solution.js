function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => i + 1).filter((n) =>
    n.toString().includes(dry)
  );
}

console.log(dryNumber(2, 20));
