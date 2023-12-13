function calculateTime(deliveries) {
  let totalAvailableTime = 7 * 60 * 60;

  const deliveryTime = deliveries.reduce((acc, delivery) => {
    const [hours, minutes, seconds] = delivery.split(":");
    return acc + hours * 3600 + minutes * 60 + seconds * 1;
  }, 0);

  totalAvailableTime -= deliveryTime;

  const isTimeLeft = totalAvailableTime > 0;
  totalAvailableTime = Math.abs(totalAvailableTime);

  const hours = Math.floor(totalAvailableTime / 3600);
  const minutes = Math.floor((totalAvailableTime % 3600) / 60);
  const seconds = Math.floor(totalAvailableTime % 60);

  return (
    "-".repeat(isTimeLeft) +
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
