(() => {
  function calculatePrice(ornaments: string): number | undefined {
    const ornamentValues: { [key: string]: number } = {
      "*": 1,
      o: 5,
      "^": 10,
      "#": 50,
      "@": 100,
    };

    let totalPrice = 0;
    let previousValue = 0;

    for (const current of ornaments) {
      // Check for invalid ornaments
      if (!ornamentValues[current]) {
        return undefined;
      }

      const currentValue = ornamentValues[current];

      // Determine whether to add or subtract the value
      if (previousValue < currentValue) {
        totalPrice += currentValue - 2 * previousValue;
      } else {
        totalPrice += currentValue;
      }

      previousValue = currentValue;
    }

    return totalPrice;
  }

  console.log(calculatePrice("***")); // 3
  console.log(calculatePrice("*o")); // 4
  console.log(calculatePrice("o*")); // 6
  console.log(calculatePrice("*o*")); // 5
  console.log(calculatePrice("**o*")); // 6
  console.log(calculatePrice("o***")); // 8
  console.log(calculatePrice("*o@")); // 94
  console.log(calculatePrice("*#")); // 49
  console.log(calculatePrice("@@@")); // 300
  console.log(calculatePrice("#@")); // 50
  console.log(calculatePrice("#@Z")); // undefined
})();
