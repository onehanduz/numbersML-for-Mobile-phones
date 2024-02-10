let startTime;
let endTime;
let elapsedTime = 0;
let timerInterval;
let interval;
let resultarr;
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
  let array1 = [];
  for (let i = 0; i < resultTime.length; i++) {
    let counter = resultTime[i].counter;
    let start = resultTime[i].start;
    let stop = resultTime[i].stop;
    let res = Number(stop - start);
    let another = resultTime.reduce((r, n, iw) => {
      n.counter == counter && r.push(iw);
      return r;
    }, []);
    if (another.length > 1 && another[0] == i) {
      for (let i = 1; i < another.length; i++) {
        res = Number(
          res + resultTime[another[i]].stop - resultTime[another[i]].start
        );
      }
      array1.push({ counter: counter, time: res });
    } else if (another.length == 1) {
      array1.push({ counter: counter, time: res });
    }
  }
  return array1;
}

function printHead(resultTime) {
  let times = Number(endTime - startTime);

  document.getElementById("amountofres").innerHTML = resultTime.length;
  document.getElementById("timeofres").innerHTML = timeToString(times);
  document.getElementById("timeofavarage").innerHTML = timeToString(
    Number(times / resultTime.length)
  );
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
