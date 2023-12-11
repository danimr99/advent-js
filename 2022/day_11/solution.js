function getCompleted(part, total) {
  const [partHour, partMin, partSec] = part.split(":");
  const [totalHour, totalMin, totalSec] = total.split(":");

  let partTime = partHour * 3600 + partMin * 60 + partSec;
  let totalTime = totalHour * 3600 + totalMin * 60 + totalSec;

  const getCommonDivisor = (a, b) => {
    if (b === 0) {
      return a;
    }

    return getCommonDivisor(b, a % b);
  };

  const divisor = getCommonDivisor(partTime, totalTime);
  partTime /= divisor;
  totalTime /= divisor;

  return `${partTime}/${totalTime}`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // '1/3'
console.log(getCompleted("02:00:00", "04:00:00")); // '1/2'
console.log(getCompleted("01:00:00", "01:00:00")); // '1/1'
console.log(getCompleted("00:10:00", "01:00:00")); // '1/6'
console.log(getCompleted("01:10:10", "03:30:30")); // '1/3'
console.log(getCompleted("03:30:30", "05:50:50")); // '3/5
