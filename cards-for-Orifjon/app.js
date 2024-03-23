let counterClick = 0;
let resultTime = [];
let memoNums = ["START"];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function memoReturn() {
  resultTime[resultTime.length - 1].stop = Date.now();
  counterClick = 0;
  document.getElementById("memoMidNum").innerHTML = memoNums[counterClick];
  document.getElementById("statusBar").innerHTML = `0/${memoNums.length - 1}`;
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
  if (resultTime[resultTime.length - 1] && counterClick > 0) {
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

function generateNumsRep(objd) {
  for (let i = 0; i < objd.amount; i++) {
    let digit = twoDigits;
    let element1 = getRandomInt(objd.minValue, objd.maxValue);
    if (element1 < digit.length) {
      memoNums.push(digit[element1]);
    }
  }
}

function generateNumsUnrepImg(objd) {
  let newDigits1 = twoDigits.slice(objd.minValue, objd.maxValue);
  let amount = newDigits1.length;
  for (let i = 0; i < objd.cycle; i++) {
    for (let i = 0; i < amount; i++) {
      let element1 = getRandomInt(0, newDigits1.length);
      memoNums.push(newDigits1[element1]);
      newDigits1.splice(element1, 1);
    }
  }
}

function generateNums(objd) {
  if (objd.slownumbers) {
    for (let i = 0; i < objd.cycle; i++) {
      let slownumbers = [...objd.slownumbers];
      for (let i = 0; i < objd.slownumbers.length; i++) {
        let element = getRandomInt(0, slownumbers.length);
        memoNums.push(slownumbers[element]);
        slownumbers.splice(element, 1);
      }
    }
  } else {
    if (objd.unrepeatable != "true") {
      generateNumsRep(objd);
    } else {
      generateNumsUnrepImg(objd);
    }
  }
}

function getData(form) {
  obj = {
    cycle: 1,
    amount: 256,
    minValue: 0,
    maxValue: 256,
    ordered: false,
    slownumbers: false,
    autoAdvanced: false,
  };
  var formData = new FormData(form);
  for (var pair of formData.entries()) {
    if (pair[0] == "amount") {
      if (pair[1] > 0) obj.amount = pair[1];
    }
    if (pair[0] == "cycle") {
      if (pair[1] > 0) obj.cycle = pair[1];
    }
    if (pair[0] == "minValue") {
      if (pair[1] > 0) obj.minValue = pair[1];
    }
    if (pair[0] == "maxValue") {
      if (pair[1] > 0) obj.maxValue = pair[1];
    }
    if (pair[0] == "unrepeatable") {
      obj.unrepeatable = pair[1];
    }
    if (pair[0] == "ordered") {
      obj.ordered = pair[1];
    }
    if (pair[0] == "slownumbers") {
      if (pair[1] != "") {
        let num = pair[1].split(" ");
        obj.slownumbers = num;
      }
    }
    if (pair[0] == "autoAdvanced") {
      if (pair[1] !== "") {
        let number = Number(pair[1]);
        number *= 100;
        obj.autoAdvanced = number;
      }
    }
  }
  return obj;
}
