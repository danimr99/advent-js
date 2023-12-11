const leds = [0, 1, 1, 0, 1];

function countTime(leds) {
  let time = 0;
  let turnedOnLeds = [];

  while (leds.some((led) => led === 0)) {
    time += 7;

    for (let i = 0; i < leds.length; i++) {
      const leftLed = i === 0 ? leds.length - 1 : i - 1;

      if (leds[leftLed] === 1 && leds[i] === 0) {
        turnedOnLeds.push(i);
      }
    }

    turnedOnLeds.map((i) => (leds[i] = 1));
    turnedOnLeds = [];
  }

  return time;
}

console.log(countTime(leds));
