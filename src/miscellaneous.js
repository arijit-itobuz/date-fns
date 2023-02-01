import { isValid, parse, format, differenceInMinutes, addMinutes } from 'date-fns';

const date = new Date();

console.log(format(date, 'yyyy/MM/dd - EEEE - HH:mm:ss'));
console.log(isValid(date));

console.log(parse('2022/02/31', 'yyyy/MM/dd', new Date()));

console.log(differenceInMinutes(addMinutes(new Date(), 15), new Date()));