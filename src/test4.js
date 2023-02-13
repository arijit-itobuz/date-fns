import { addSeconds, differenceInDays, endOfDay, format, startOfDay } from 'date-fns';

const currentDateTime = new Date('2022-02-12 10:15:00');
const lastRunTime = new Date('2022-02-10 14:25:05');

const delta = differenceInDays(currentDateTime, lastRunTime);
console.log('delta', delta);
const apiTimeArray = [];
let end = endOfDay(lastRunTime);
apiTimeArray.push([format(lastRunTime, 'yyyy-MM-dd HH:mm:ss'), format(endOfDay(lastRunTime), 'yyyy-MM-dd HH:mm:ss')]);
for (let i = 0; i < delta; i++) {
  apiTimeArray.push([
    format(addSeconds(end, 1), 'yyyy-MM-dd HH:mm:ss'),
    format(endOfDay(addSeconds(end, 1)), 'yyyy-MM-dd HH:mm:ss'),
  ]);
  end = endOfDay(addSeconds(end, 1));
}
apiTimeArray.push([format(startOfDay(currentDateTime), 'yyyy-MM-dd HH:mm:ss'), format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')]);

console.log('apiTimeArray', apiTimeArray);
