let timerArr = process.argv.slice(2);
//filtered array where no negatives or NaN are passed through and times are converted to milliseconds then numbers
let msArr = timerArr.filter(x => x > -1).map(x => x + 0 + 0 + 0 - '')

for (let ms of msArr){
  setTimeout(()=>{
    process.stdout.write('\x07');
  }, ms)
}