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

function easyGenNum(objd) {
  let digit = twoDigits;
  if (objd.numberSystem == 3) digit = threeDigits;
  let element1 = getRandomInt(objd.minValue, objd.maxValue);
  let element2 = getRandomInt(objd.minValue, objd.maxValue);
  let element3 = getRandomInt(objd.minValue, objd.maxValue);
  if (
    element1 < digit.length &&
    element2 < digit.length &&
    element3 < digit.length
  ) {
    if (objd.image == 1) {
      memoNums.push(digit[element1]);
    } else if (objd.image == 2) {
      memoNums.push(digit[element1] + "" + digit[element2]);
    } else if (objd.image == 3) {
      memoNums.push(
        digit[element1] + "" + digit[element2] + "" + digit[element3]
      );
    }
  }
}

function generateNumsRep(objd) {
  for (let i = 0; i < objd.amount; i++) {
    easyGenNum(objd);
  }
}

function generateNumsUnrepImg(objd) {
  let newDigits1 = twoDigits.slice(objd.minValue, objd.maxValue);
  let newDigits2 = twoDigits.slice(objd.minValue, objd.maxValue);
  let newDigits3 = twoDigits.slice(objd.minValue, objd.maxValue);
  if (objd.numberSystem == 3) {
    newDigits1 = threeDigits.slice(objd.minValue, objd.maxValue);
    newDigits2 = threeDigits.slice(objd.minValue, objd.maxValue);
    newDigits3 = threeDigits.slice(objd.minValue, objd.maxValue);
  }
  let amount = newDigits1.length;
  for (let i = 0; i < amount; i++) {
    let element1 = getRandomInt(0, newDigits1.length);
    let element2 = getRandomInt(0, newDigits2.length);
    let element3 = getRandomInt(0, newDigits3.length);
    if (objd.image == 1) {
      if (objd.unrepeatable1 == "true") {
        memoNums.push(newDigits1[element1]);
        newDigits1.splice(element1, 1);
      } else {
        return generateNumsRep(objd);
      }
    } else if (objd.image == 2) {
      if (
        objd.unrepeatable3 == "true" &&
        objd.unrepeatable2 == "false" &&
        objd.unrepeatable1 == "false"
      ) {
        return generateNums(objd);
      } else {
        memoNums.push(newDigits1[element1] + "" + newDigits2[element2]);
        if (objd.unrepeatable1 == "true") newDigits1.splice(element1, 1);
        if (objd.unrepeatable2 == "true") newDigits2.splice(element2, 1);
      }
    } else if (objd.image == 3) {
      memoNums.push(
        newDigits1[element1] +
          "" +
          newDigits2[element2] +
          "" +
          newDigits3[element3]
      );
      if (objd.unrepeatable1 == "true") newDigits1.splice(element1, 1);
      if (objd.unrepeatable2 == "true") newDigits2.splice(element2, 1);
      if (objd.unrepeatable3 == "true") newDigits3.splice(element3, 1);
    }
  }
}

function generateNums(objd) {
  if (objd.slownumbers) {
    let slownumbers = [...objd.slownumbers];
    for (let i = 0; i < objd.slownumbers.length; i++) {
      let element = getRandomInt(0, slownumbers.length);
      memoNums.push(slownumbers[element]);
      slownumbers.splice(element, 1);
    }
  } else {
    if (
      objd.unrepeatable1 != "true" &&
      objd.unrepeatable2 != "true" &&
      objd.unrepeatable3 != "true"
    ) {
      generateNumsRep(objd);
    } else {
      generateNumsUnrepImg(objd);
    }
  }
}

function getData(form) {
  obj = {
    numberSystem: 2,
    image: 1,
    amount: 100,
    minValue: 0,
    maxValue: 100,
    slownumbers: false,
    unrepeatable1: false,
    unrepeatable2: false,
    unrepeatable3: false,
    autoAdvanced: false,
  };
  var formData = new FormData(form);
  for (var pair of formData.entries()) {
    if (pair[0] == "numberSystem") {
      obj.numberSystem = pair[1];
    }
    if (pair[0] == "image") {
      obj.image = pair[1];
    }
    if (pair[0] == "amount") {
      if (pair[1] > 0) obj.amount = pair[1];
    }
    if (pair[0] == "minValue") {
      if (pair[1] > 0) obj.minValue = pair[1];
    }
    if (pair[0] == "maxValue") {
      if (obj.numberSystem == 3) obj.maxValue = 1000;
      if (pair[1] > 0) obj.maxValue = pair[1];
    }
    if (pair[0] == "unrepeatable1") {
      obj.unrepeatable1 = pair[1];
    }
    if (pair[0] == "unrepeatable2") {
      obj.unrepeatable2 = pair[1];
    }
    if (pair[0] == "unrepeatable3") {
      obj.unrepeatable3 = pair[1];
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
