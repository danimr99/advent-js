const year = 2022;
const holidays = Object.freeze(["01/06", "04/01", "12/25"]);

function countHours(year, holidays) {
  let extraHours = 0;

  for (const holiday of holidays) {
    const [month, day] = holiday.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    if (date.getDay() !== 6 && date.getDay() !== 0) {
      extraHours += 2;
    }
  }

  return extraHours;
}

console.log(countHours(year, holidays));
