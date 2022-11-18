import {
  format,
  addYears,
  addMonths,
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  add,
} from 'date-fns';

const date1 = new Date('2022-12-31 11:30:30');

let date2 = addYears(date1, 10);
date2 = addMonths(date2, 1);
date2 = addDays(date2, 10);
date2 = addHours(date2, 2);
date2 = addMinutes(date2, 10);
date2 = addSeconds(date2, 10);

console.log('date1', format(date1, 'yyyy-MM-dd HH:mm:ss'));
console.log('date2', format(date2, 'yyyy-MM-dd HH:mm:ss'));

const date3 = add(date1, {
  years: 1,
  months: 1,
  days: 1,
  weeks: 5,
  hours: 10,
  minutes: 10,
  seconds: 10,
});
console.log('date3', format(date3, 'yyyy-MM-dd HH:mm:ss'));
