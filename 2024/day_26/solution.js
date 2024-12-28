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
