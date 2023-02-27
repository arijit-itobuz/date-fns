// import { differenceInDays, format, parse, subDays } from 'date-fns';

import { differenceInDays, differenceInMilliseconds, differenceInSeconds, format, parse, subDays } from "date-fns";

// const d1 = new Date('2023-01-20');
// const d2 = new Date('2023-01-15');

// console.log({ d1, d2 });

// const diff = differenceInDays(d1, d2);

// console.log({ diff });

// const dateArr = [];

// for (let i = 0; i < diff; i++) {
//   dateArr.unshift(subDays(d1, i));
// }

// console.log({ dateArr });

// const d1 = new Date('2023-01-30 17:50:00')
// const d2 = new Date('2023-01-31 17:50:00')

// const d = differenceInMilliseconds(d2, d1) 

// console.log(d, 24 * 60 * 60 * 1000);
// console.log(d <  24 * 60 * 60 * 1000);


// const d = new Date('2023-02-12T20:42:48.000Z')

// console.log(format(d, 'yyyy-MM-dd HH:mm:ss'));

console.log(format(subDays(new Date('2023-02-21'), 7), 'yyyy-MM-dd'));