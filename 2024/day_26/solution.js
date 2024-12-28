function getCompleted(timeWorked, totalTime) {
  function getSeconds(timeStr) {
    let parts = [];
    let current = "";
    for (let char of timeStr) {
      if (char === ":") {
        parts.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    parts.push(current);

    let total = 0;
    for (let part of parts) {
      total = total * 60 + parseInt(part, 10);
    }
    return total;
  }

  const workedSeconds = getSeconds(timeWorked);
  const totalSeconds = getSeconds(totalTime);
  const percentage = Math.round((workedSeconds / totalSeconds) * 100);

  return `${percentage}%`;
}
