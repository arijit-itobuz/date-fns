import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import { format, startOfDay, subDays, parse, differenceInDays, endOfDay, isBefore, addMinutes, differenceInMinutes, differenceInSeconds } from 'date-fns';

// const date = new Date();

// console.log(format(date, 'yyyy-MM-dd HH:mm:ss'));
// const formattedDate = formatInTimeZone(date, 'America/LOS_ANGELES', 'yyyy-MM-dd HH:mm:ss');
// console.log(formattedDate);

// console.log(format(subDays(new Date(), 7), 'yyyy-MM-dd'));

// console.log(format(date, 'yyyy-MM-dd HH:mm:ss'));
// console.log(format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss'));

// const today = parse(format(new Date(), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date());
// console.log(format(today, 'yyyy-MM-dd HH:mm:ss'));

// const start = new Date('2022-02-11 14:25:05');
// const end = new Date('2022-02-12 10:15:00');

// const diff = differenceInDays(end, start);

// console.log(diff);

// const log = isBefore(new Date('2023-01-10'), new Date('2023-01-11'))

// console.log(log);


const log = differenceInMinutes(new Date('2023-02-22T00:40:07.000Z'), new Date('2023-02-22T00:38:47.000Z'))

console.log(log);

console.log(format(new Date('2023-02-22T00:40:07.000Z'), 'yyyy-MM-dd HH:mm:ss'));
console.log(format(addMinutes(subDays(new Date('2023-02-22T00:40:07.000Z'), 1), 1), 'yyyy-MM-dd HH:mm:ss'));