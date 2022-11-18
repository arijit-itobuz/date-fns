import { format } from 'date-fns';

const date = new Date('2022-12-31 13:30:30');

console.log(date); // 2022-12-31T08:00:30.000Z

console.log(format(date, 'yyyy MM d'));
console.log(format(date, 'yyyy-MM-dd'));
console.log(format(date, 'yyyy/MM/dd'));
console.log(format(date, 'yyyy\\MM\\dd'));

console.log(format(date, 'hh mm ss a')); // 12hr format - 01 30 30 PM
console.log(format(date, 'HH mm ss a')); // 24hr format - 13 30 30 PM
console.log(format(date, 'HH-mm-ss'));
console.log(format(date, 'HH:mm:ss'));
console.log(format(date, 'HH:mm:ss'));

console.log(date.getTime()); // native JS
console.log(format(date, 'T')); // milliseconds timestamp

console.log(format(new Date(), 'PPPPpp')); // Friday, November 18th, 2022 at 2:02:49 PM
console.log(format(new Date(), 'PPPPppp')); // Friday, November 18th, 2022 at 2:02:49 PM GMT+5:30
console.log(format(new Date(), 'PPPPpppp')); // Friday, November 18th, 2022 at 2:02:49 PM GMT+05:30
