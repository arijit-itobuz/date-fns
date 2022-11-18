import { format } from 'date-fns';

const date = new Date('2022-12-31 13:30:30');

console.log(date);

console.log(format(date, 'yyyy MM d'));
console.log(format(date, 'yyyy-MM-dd'));
console.log(format(date, 'yyyy/MM/dd'));
console.log(format(date, 'yyyy\\MM\\dd'));

console.log(format(date, 'hh mm ss')); // 12hr format
console.log(format(date, 'HH mm ss')); // 24hr format
console.log(format(date, 'HH-mm-ss'));
console.log(format(date, 'HH:mm:ss'));
console.log(format(date, 'HH:mm:ss'));

console.log(date.getTime()); // native JS
console.log(format(date, 'T')); // milliseconds timestamp
