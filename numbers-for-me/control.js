let counterClick = 0;
let resultTime = [];
let memoNums = ["START"];
let old_counter = 0;

function memoReturn() {
  if (counterClick == 0) {
    counterClick = old_counter;
    memoNext();
  } else if (counterClick > 0) {
    resultTime[resultTime.length - 1].stop = Date.now();
    old_counter = counterClick;
    counterClick = 0;
    resultTime.push({ counter: 0, start: Date.now(), stop: Date.now() });
    document.getElementById("memoMidNum").innerHTML = memoNums[counterClick];
    document.getElementById("statusBar").innerHTML = `0/${memoNums.length - 1}`;
  }
}
function memoPrev() {
  if (counterClick > 0) {
    resultTime[resultTime.length - 1].stop = Date.now();
    counterClick--;
  }
  document.getElementById("memoMidNum").innerHTML = memoNums[counterClick];
  document.getElementById("statusBar").innerHTML = `${counterClick}/${
    memoNums.length - 1
  }`;
  if (counterClick != 0) {
    resultTime.push({ counter: counterClick, start: Date.now(), stop: 0 });
  }
}
function memoNext() {
  if (resultTime.length) {
    resultTime[resultTime.length - 1].stop = Date.now();
  }
  if (memoNums.length - 1 == counterClick) {
    document.getElementById("memoEnd").click();
  }
  if (counterClick < memoNums.length - 1) {
    counterClick++;
  }
  document.getElementById("memoMidNum").innerHTML = memoNums[counterClick];
  document.getElementById("statusBar").innerHTML = `${counterClick}/${
    memoNums.length - 1
  }`;
  resultTime.push({ counter: counterClick, start: Date.now(), stop: 0 });
}

function memoElo() {
  if (counterClick == 0) {
  } else {
    memoNums.push([memoNums[counterClick]]);
    return memoNext();
  }
}
