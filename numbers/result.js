let startTime;
let endTime;
let stop_time = 0;
let stop_time_counter = 0;
let pure_time = 0;
let avaragetime = 0;
let elapsedTime = 0;
let timerInterval;
let interval;
let resultarr = 0;
Array.prototype.multiIndexOf = function (el) {
  var idxs = [];
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] === el) {
      idxs.unshift(i);
    }
  }
  return idxs;
};

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);
  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);
  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);
  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");
  return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
  document.getElementById("timeStart").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 100);
}

function pause() {
  clearInterval(timerInterval);
}

function calculateResults(resultTime) {
  const results = {};

  for (const { counter, start, stop } of resultTime) {
    const duration = stop - start;
    results[counter] = (results[counter] || 0) + duration;
  }

  // Separate counter 0 and others
  const array1 = [];
  for (const [counter, total] of Object.entries(results)) {
    if (Number(counter) === 0) {
      stop_time += total;
      stop_time_counter++;
    } else {
      array1.push({ counter: Number(counter), time: total });
    }
  }

  return array1;
}

function printHead(resultTime) {
  let times = Number(endTime - startTime);
  avaragetime = Number(
    (times - stop_time) / resultTime.length - stop_time_counter
  );
  pure_time = times - stop_time;
  document.getElementById("amountofres").innerHTML = resultTime.length;
  document.getElementById("timeofres").innerHTML = timeToString(times);
  document.getElementById("amountofrestimeer").innerHTML =
    timeToString(pure_time);
  document.getElementById("amountofrestime").innerHTML =
    timeToString(stop_time);
  document.getElementById("timeofavarage").innerHTML =
    timeToString(avaragetime);
}

function compareNumbers(a, b) {
  return b.time - a.time;
}

function printResult(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result =
      result +
      "" +
      "<tr><td>" +
      memoNums[arr[i].counter] +
      "</td><td>" +
      timeToString(arr[i].time) +
      "</td></tr>";
  }
  document.getElementById("memoResults").innerHTML = result;
}
function sortResults(arr) {
  arr.sort(compareNumbers);
  printResult(arr);
}
function copyElements() {
  let text = "";
  for (let i = 0; i < resultarr.length; i++) {
    const element = resultarr[i];
    if (element.time > avaragetime)
      text = text + " " + memoNums[element.counter];
  }
  navigator.clipboard.writeText(text.trim());
}
function copyTime() {
  navigator.clipboard.writeText(
    timeToString(pure_time) + "/" + timeToString(avaragetime)
  );
}
