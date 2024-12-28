function getCompleted(timeWorked, totalTime) {
  const getSeconds = (timeStr) =>
    timeStr.split(":").reduce((acc, time) => 60 * acc + +time);

  const workedSeconds = getSeconds(timeWorked);
  const totalSeconds = getSeconds(totalTime);

  const percentage = Math.round((workedSeconds / totalSeconds) * 100);

  return `${percentage}%`;
}
