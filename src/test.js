import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import { format, startOfDay, subDays, parse } from "date-fns";


const date = new Date();

console.log(format(date, 'yyyy-MM-dd HH:mm:ss'));
const formattedDate = formatInTimeZone(date, 'America/LOS_ANGELES', 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate);


// console.log(format(subDays(new Date(), 7), 'yyyy-MM-dd'));

// console.log(format(date, 'yyyy-MM-dd HH:mm:ss'));
// console.log(format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss'));

// const today = parse(format(new Date(), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date());
// console.log(format(today, 'yyyy-MM-dd HH:mm:ss'));
