import { addSeconds, differenceInDays, endOfDay, format, startOfDay } from 'date-fns';

const currentDateTime = new Date();
const lastRunTime = new Date('2023-02-14 23:27:23');

console.log({
  lastRunTime: format(lastRunTime, 'yyyy-MM-dd HH:mm:ss'),
  currentDateTime: format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
});
const delta = differenceInDays(currentDateTime, lastRunTime);
console.log('delta', delta);
const apiTimeArray = [];
if (!delta && format(currentDateTime, 'yyyy-MM-dd') === format(lastRunTime, 'yyyy-MM-dd')) {
  apiTimeArray.push([format(lastRunTime, 'yyyy-MM-dd HH:mm:ss'), format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')]);
} else {
  let end = endOfDay(lastRunTime);
  apiTimeArray.push([format(lastRunTime, 'yyyy-MM-dd HH:mm:ss'), format(endOfDay(lastRunTime), 'yyyy-MM-dd HH:mm:ss')]);
  for (let i = 1; i < delta; i++) {
    apiTimeArray.push([
      format(addSeconds(end, 1), 'yyyy-MM-dd HH:mm:ss'),
      format(endOfDay(addSeconds(end, 1)), 'yyyy-MM-dd HH:mm:ss'),
    ]);
    end = endOfDay(addSeconds(end, 1));
  }
  apiTimeArray.push([format(startOfDay(currentDateTime), 'yyyy-MM-dd HH:mm:ss'), format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')]);
}

console.log('apiTimeArray', apiTimeArray);
