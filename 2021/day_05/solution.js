export default function daysToXmas(date) {
  date.setHours(0, 0, 0, 0);

  const xmas = new Date("Dec 25, 2021");
  xmas.setHours(0, 0, 0, 0);

  let diff = xmas.getTime() - date.getTime();
  diff /= 1000 * 60 * 60 * 24;

  return diff;
}

const date1 = new Date("Dec 1, 2021");
console.log(daysToXmas(date1)); // 24

const date2 = new Date("Dec 24, 2021 00:00:01");
console.log(daysToXmas(date2)); // 1

const date3 = new Date("Dec 24, 2021 23:59:59");
console.log(daysToXmas(date3)); // 1

const date4 = new Date("December 20, 2021 03:24:00");
console.log(daysToXmas(date4)); // 5
