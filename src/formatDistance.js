import { format, formatDistance } from "date-fns";

const date1 = new Date('2022', '01', '10', '14', '15', '30');
const date2 = new Date('2022', '01', '10', '15', '15', '30');

console.log(format(date1, 'yyyy/MM/dd - EEEE - HH:mm:ss a'));
console.log(format(date2, 'yyyy/MM/dd - EEEE - HH:mm:ss a'));

console.log(formatDistance(date1, date2));