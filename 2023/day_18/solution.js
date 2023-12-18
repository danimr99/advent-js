function drawClock(time) {
  const clock = [[], [], [], [], [], [], []];

  const full = ["*", "*", "*"];
  const open = ["*", " ", "*"];
  const start = ["*", " ", " "];
  const end = [" ", " ", "*"];
  const spaces = [" ", " ", " "];
  const middle = [" ", "*", " "];

  const numbers = {
    0: [full, open, open, open, open, open, full],
    1: [end, end, end, end, end, end, end],
    2: [full, end, end, full, start, start, full],
    3: [full, end, end, full, end, end, full],
    4: [open, open, open, full, end, end, end],
    5: [full, start, start, full, end, end, full],
    6: [full, start, start, full, open, open, full],
    7: [full, end, end, end, end, end, end],
    8: [full, open, open, full, open, open, full],
    9: [full, open, open, full, end, end, full],
  };

  const hour1 = numbers[time[0]];
  const hour2 = numbers[time[1]];
  const colon = [spaces, spaces, middle, spaces, middle, spaces, spaces];
  const minute1 = numbers[time[3]];
  const minute2 = numbers[time[4]];

  let index = 0;

  for (const item of clock) {
    item.push(
      ...hour1[index],
      " ",
      ...hour2[index],
      ...colon[index],
      ...minute1[index],
      " ",
      ...minute2[index]
    );

    index++;
  }

  return clock;
}

console.log(drawClock("01:30"));
