var time = 0;
var running = 0;

function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.querySelector('.startPause').innerHTML = 'Pause';
  }  else {
    running = 0;
    document.querySelector('.startPause').innerHTML = 'Cont...';
  }
}

function resetStopWatch() {
  clearTimeout(stopWatch);
  running = 0;
  time = 0;
  document.querySelector('.startPause').innerHTML = 'Start';
  document.querySelector('.output').innerHTML = '00:00:00';
  document.querySelector('.milisecond').innerHTML = '00';
}

function increment() {
  if (running == 1) {
      stopWatch = setTimeout(function() {
      time++;
      var hours = Math.floor(time/100/60/60) % 60;
      var mins = Math.floor(time/100/60) % 60;
      var secs = Math.floor(time/100) % 60;
      var mlsecs = time % 100;
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (mins < 10) {
        mins = '0' + mins;
      }
      if (secs < 10) {
        secs = '0' + secs;
      }
      document.querySelector('.output').innerHTML = hours + ':' + mins + ':' + secs;
      document.querySelector('.milisecond').innerHTML = mlsecs;
      increment();
    }, 10);
  }
}
