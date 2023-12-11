const road = "S..|...|..";
const time = 10;

function cyberReindeer(road, time) {
  const result = [road];
  road = road.replace("S", ".");

  let sledPosition = 2;
  let timeUnit = 1;

  while (timeUnit < time) {
    const symbol = road[sledPosition];

    result.push(
      road.slice(0, sledPosition - 1) + "S" + road.slice(sledPosition)
    );

    if (++timeUnit === 5) {
      road = road.replace(/\|/g, "*");
    } else if (symbol === "|") {
      continue;
    }

    sledPosition++;
  }

  return result;
}

console.log(cyberReindeer(road, time));
