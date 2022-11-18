import { format, differenceInDays, differenceInBusinessDays } from 'date-fns';

const startDate = new Date('2022-12-31 13:30:30');
const endDate = new Date('2023-01-02 13:30:30');

console.log(format(startDate, 'yyyy-MM-dd-EEEE HH:mm:ss'));
console.log(format(endDate, 'yyyy-MM-dd-EEEE HH:mm:ss'));

console.log(differenceInDays(endDate, startDate));
console.log(differenceInBusinessDays(endDate, startDate));
