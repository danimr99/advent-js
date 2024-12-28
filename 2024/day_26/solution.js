function getCompleted(timeWorked, totalTime) {
  function getSeconds(str) {
    const parts = str.split(":");
    let total = 0;

    for (let i = 0; i < parts.length; i++) {
      total = total * 60 + parseInt(parts[i], 10);
    }

    return total;
  }

  const workedSeconds = getSeconds(timeWorked);
  const totalSeconds = getSeconds(totalTime);
  const percentage = Math.round((workedSeconds / totalSeconds) * 100);

  return `${percentage}%`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // 33%
console.log(getCompleted("02:00:00", "04:00:00")); // 50%
console.log(getCompleted("01:00:00", "01:00:00")); // 100%
console.log(getCompleted("00:10:00", "01:00:00")); // 17%
console.log(getCompleted("01:10:10", "03:30:30")); // 33%
console.log(getCompleted("03:30:30", "05:50:50")); // 60%
