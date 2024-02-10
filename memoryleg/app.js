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
}
function memoPrev() {
  if (counterClick > 0) {
    resultTime[resultTime.length - 1].stop = Date.now();
    counterClick--;
  }
  document.getElementById("memoMidNum").innerHTML = memoNums[counterClick];
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
  resultTime.push({ counter: counterClick, start: Date.now(), stop: 0 });
}

function generateNumsRepOneImg(objd) {
  for (let i = 0; i < objd.amount; i++) {
    let element1 = getRandomInt(objd.minValue, objd.maxValue);
    if (objd.numberSystem == 2 && element1 < twoDigits.length) {
      memoNums.push(twoDigits[element1]);
    } else if (objd.numberSystem == 3 && element1 < threeDigits.length) {
      memoNums.push(threeDigits[element1]);
    }
  }
}
function generateNumsRepTwoImg(objd) {
  for (let i = 0; i < objd.amount; i++) {
    let element1 = getRandomInt(objd.minValue, objd.maxValue);
    let element2 = getRandomInt(objd.minValue, objd.maxValue);
    if (
      objd.numberSystem == 2 &&
      element1 < twoDigits.length &&
      element2 < twoDigits.length
    ) {
      memoNums.push("" + twoDigits[element1] + "" + twoDigits[element2]);
    } else if (
      objd.numberSystem == 3 &&
      element1 < threeDigits.length &&
      element2 < threeDigits.length
    ) {
      memoNums.push("" + threeDigits[element1] + "" + threeDigits[element2]);
    }
  }
}
function generateNumsRepThreeImg(objd) {
  for (let i = 0; i < objd.amount; i++) {
    let element1 = getRandomInt(objd.minValue, objd.maxValue);
    let element2 = getRandomInt(objd.minValue, objd.maxValue);
    let element3 = getRandomInt(objd.minValue, objd.maxValue);
    if (
      objd.numberSystem == 2 &&
      element1 < twoDigits.length &&
      element2 < twoDigits.length &&
      element3 < twoDigits.length
    ) {
      memoNums.push(
        "" +
          twoDigits[element1] +
          "" +
          twoDigits[element2] +
          "" +
          twoDigits[element3]
      );
    } else if (
      objd.numberSystem == 3 &&
      element1 < threeDigits.length &&
      element2 < threeDigits.length &&
      element3 < threeDigits.length
    ) {
      memoNums.push(
        "" +
          threeDigits[element1] +
          "" +
          threeDigits[element2] +
          "" +
          threeDigits[element3]
      );
    }
  }
}

function generateNumsUnrepOneImg(objd) {
  if (objd.unrepeatable2== "true"||objd.unrepeatable3 =="true") {
    generateNumsRepOneImg(objd)
  }else{
  let newDigits;
  if (objd.numberSystem == 2) {
    newDigits = twoDigits.slice(objd.minValue, objd.maxValue);
  }
  if (objd.numberSystem == 3) {
    newDigits = threeDigits.slice(objd.minValue, objd.maxValue);
  }
  let amount = newDigits.length;
  if (newDigits.length > 1) {
    for (let i = 0; i < amount; i++) {
      let element1 = getRandomInt(0, newDigits.length);
      memoNums.push(newDigits[element1]);
      newDigits.splice(element1, 1);
    }
  } else {
    memoNums.push(newDigits[0]);
  }
}}

function generateNumsUnrepTwoImg(objd) {
  if (objd.unrepeatable3 =="true") {
    generateNumsRepTwoImg(objd)
  }else{
  let newDigits1;
  let newDigits2;
  if (objd.numberSystem == 2) {
    newDigits1 = twoDigits.slice(objd.minValue, objd.maxValue);
    newDigits2 = twoDigits.slice(objd.minValue, objd.maxValue);
  }
  if (objd.numberSystem == 3) {
    newDigits1 = threeDigits.slice(objd.minValue, objd.maxValue);
    newDigits2 = threeDigits.slice(objd.minValue, objd.maxValue);
  }
  let amount = newDigits1.length;
  if (newDigits1.length > 1) {
    if (objd.unrepeatable1 == "true" && objd.unrepeatable2 == "false") {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        memoNums.push(newDigits1[element1] + "" + newDigits2[element2]);
        newDigits1.splice(element1, 1);
      }
    }
    if (objd.unrepeatable1 == "false" && objd.unrepeatable2 == "true") {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        memoNums.push(newDigits1[element1] + "" + newDigits2[element2]);
        newDigits2.splice(element2, 1);
      }
    }
    if (objd.unrepeatable1 == "true" && objd.unrepeatable2 == "true") {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        memoNums.push(newDigits1[element1] + "" + newDigits2[element2]);
        newDigits1.splice(element1, 1);
        newDigits2.splice(element2, 1);
      }
    }
  } else {
  }
}}

function generateNumsUnrepThreeImg(objd) {
  let newDigits1;
  let newDigits2;
  let newDigits3;
  if (objd.numberSystem == 2) {
    newDigits1 = twoDigits.slice(objd.minValue, objd.maxValue);
    newDigits2 = twoDigits.slice(objd.minValue, objd.maxValue);
    newDigits3 = twoDigits.slice(objd.minValue, objd.maxValue);
  }
  if (objd.numberSystem == 3) {
    newDigits1 = threeDigits.slice(objd.minValue, objd.maxValue);
    newDigits2 = threeDigits.slice(objd.minValue, objd.maxValue);
    newDigits3 = threeDigits.slice(objd.minValue, objd.maxValue);
  }
  let amount = newDigits1.length;
  if (newDigits1.length > 1) {
    if (
      objd.unrepeatable1 == "true" &&
      objd.unrepeatable2 == "false" &&
      objd.unrepeatable3 == "false"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits1.splice(element1, 1);
      }
    }
    if (
      objd.unrepeatable1 == "false" &&
      objd.unrepeatable2 == "true" &&
      objd.unrepeatable3 == "false"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits2.splice(element2, 1);
      }
    }
    if (
      objd.unrepeatable1 == "true" &&
      objd.unrepeatable2 == "true" &&
      objd.unrepeatable3 == "false"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits1.splice(element1, 1);
        newDigits2.splice(element2, 1);
      }
    }
    if (
      objd.unrepeatable1 == "false" &&
      objd.unrepeatable2 == "false" &&
      objd.unrepeatable3 == "true"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits3.splice(element3, 1);
      }
    }
    if (
      objd.unrepeatable1 == "false" &&
      objd.unrepeatable2 == "true" &&
      objd.unrepeatable3 == "true"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits2.splice(element2, 1);
        newDigits3.splice(element3, 1);
      }
    }
    if (
      objd.unrepeatable1 == "true" &&
      objd.unrepeatable2 == "true" &&
      objd.unrepeatable3 == "true"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits1.splice(element1, 1);
        newDigits2.splice(element2, 1);
        newDigits3.splice(element3, 1);
      }
    }
    if (
      objd.unrepeatable1 == "true" &&
      objd.unrepeatable2 == "false" &&
      objd.unrepeatable3 == "true"
    ) {
      for (let i = 0; i < amount; i++) {
        let element1 = getRandomInt(0, newDigits1.length);
        let element2 = getRandomInt(0, newDigits2.length);
        let element3 = getRandomInt(0, newDigits3.length);
        memoNums.push(
          newDigits1[element1] +
            "" +
            newDigits2[element2] +
            "" +
            newDigits3[element3]
        );
        newDigits1.splice(element1, 1);
        newDigits3.splice(element3, 1);
      }
    }
  } else {
  }
}

function generateNumsRep(objd) {
  if (objd.image == 1) generateNumsRepOneImg(objd);
  if (objd.image == 2) generateNumsRepTwoImg(objd);
  if (objd.image == 3) generateNumsRepThreeImg(objd);
}

function generateNumsUnrep(objd) {
  if (objd.image == 1) generateNumsUnrepOneImg(objd);
  if (objd.image == 2) generateNumsUnrepTwoImg(objd);
  if (objd.image == 3) generateNumsUnrepThreeImg(objd);
}

function generateNums(objd) {
  if (
    objd.unrepeatable1 != "true" &&
    objd.unrepeatable2 != "true" &&
    objd.unrepeatable3 != "true"
  ) {
    generateNumsRep(objd);
  }else {
    generateNumsUnrep(objd);
  }
}

function getData(form) {
  obj = {
    numberSystem: 2,
    image: 1,
    amount: 100,
    minValue: 0,
    maxValue: 100,
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
      if(obj.numberSystem ==3) obj.maxValue = 1000;
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
    if (pair[0] == "autoAdvanced") {
      if (pair[1] !== "") obj.autoAdvanced = pair[1];
    }
  }
  return obj;
}
