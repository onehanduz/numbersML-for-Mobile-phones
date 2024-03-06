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
    let digit = threeDigits;
    let element1 = getRandomInt(objd.minValue1, objd.maxValue1);
    let element2 = getRandomInt(objd.minValue2, objd.maxValue2);
    if (element1 < digit.length && element2 < digit.length) {
      if (objd.image == 1) {
        memoNums.push(digit[element1]);
      } else if (objd.image == 2) {
        memoNums.push(digit[element1] + "" + digit[element2]);
      }
    }
  }
}

function generateNumsUnrepImg(objd) {
  for (let i = 0; i < objd.cycle; i++) {
    let newDigits1 = threeDigits.slice(objd.minValue1, objd.maxValue1);
    let newDigits2 = threeDigits.slice(objd.minValue2, objd.maxValue2);
    let amount = newDigits1.length;
    for (let i = 0; i < amount; i++) {
      let element1 = getRandomInt(0, newDigits1.length);
      let element2 = getRandomInt(0, newDigits2.length);
      if (objd.image == 1) {
        if (objd.unrepeatable1 == "true") {
          memoNums.push(newDigits1[element1]);
          newDigits1.splice(element1, 1);
        } else {
          return generateNumsRep(objd);
        }
      } else if (objd.image == 2) {
        memoNums.push(newDigits1[element1] + "" + newDigits2[element2]);
        if (objd.unrepeatable1 == "true") newDigits1.splice(element1, 1);
        if (objd.unrepeatable2 == "true") newDigits2.splice(element2, 1);
      }
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
    if (objd.unrepeatable1 != "true" && objd.unrepeatable2 != "true") {
      generateNumsRep(objd);
    } else {
      generateNumsUnrepImg(objd);
    }
  }
}

function getData(form) {
  obj = {
    cycle: 1,
    image: 1,
    amount: 1000,
    minValue1: 0,
    minValue2: 0,
    maxValue1: 1000,
    maxValue2: 1000,
    slownumbers: false,
    unrepeatable1: true,
    unrepeatable2: true,
    autoAdvanced: false,
  };
  var formData = new FormData(form);
  for (var pair of formData.entries()) {
    if (pair[0] == "image") {
      obj.image = pair[1];
    }
    if (pair[0] == "amount") {
      if (pair[1] > 0) obj.amount = pair[1];
    }
    if (pair[0] == "cycle") {
      if (pair[1] > 0) obj.cycle = pair[1];
    }
    if (pair[0] == "minValue1") {
      if (pair[1] > 0) obj.minValue1 = pair[1];
    }
    if (pair[0] == "maxValue1") {
      if (obj.numberSystem == 3) obj.maxValue = 1000;
      if (pair[1] > 0) obj.maxValue1 = pair[1];
    }
    if (pair[0] == "minValue2") {
      if (pair[1] > 0) obj.minValue1 = pair[1];
    }
    if (pair[0] == "maxValue2") {
      if (obj.numberSystem == 3) obj.maxValue = 1000;
      if (pair[1] > 0) obj.maxValue2 = pair[1];
    }
    if (pair[0] == "unrepeatable1") {
      obj.unrepeatable1 = pair[1];
    }
    if (pair[0] == "unrepeatable2") {
      obj.unrepeatable2 = pair[1];
    }
    if (pair[0] == "slownumbers") {
      if (pair[1] != "") {
        let num = pair[1].split(" ");
        obj.slownumbers = num;
      }
    }
    if (pair[0] == "autoAdvanced") {
      if (pair[1] !== "") obj.autoAdvanced = pair[1];
    }
  }
  return obj;
}
