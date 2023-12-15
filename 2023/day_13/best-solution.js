function calculateTime(deliveries) {
  const maxTime = 7 * 60 * 60;
  let time = 0;

  for (let delivery of deliveries) {
    const numbers = delivery.split(":");
    time += +numbers[0] * 3600 + +numbers[1] * 60 + +numbers[2];
  }

  const hasTimeLeft = maxTime - time > 0;

  time = Math.abs(maxTime - time);

  let response = ["", "-"][+hasTimeLeft];

  response += (~~(time / 3600) + "").padStart(2, "0") + ":";
  time %= 3600;
  response += (~~(time / 60) + "").padStart(2, "0") + ":";
  time %= 60;
  response += (time + "").padStart(2, "0");

  return response;
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
