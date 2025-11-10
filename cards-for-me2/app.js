function imgGenenrator(img, p) {
  if (p == 1) {
    return (
      '<img class="cardsMemo_e cardsMemoPos1Of2" src="cards/' +
      img +
      '.svg" alt="card"></img>'
    );
  }
  if (p == 2) {
    return (
      '<img class="cardsMemo_e cardsMemoPos2Of2" src="cards/' +
      img +
      '.svg" alt="card"></img>'
    );
  }
  if (p == 3) {
    return (
      '<img class="cardsMemo_e cardsMemoPos3Of2" src="cards/' +
      img +
      '.svg" alt="card"></img>'
    );
  }
  if (p == 4) {
    return (
      '<img class="cardsMemo_e cardsMemoPos4Of2" src="cards/' +
      img +
      '.svg" alt="card"></img>'
    );
  }
}
function getRandomInt(objd) {
  const minCeiled = Math.ceil(objd.minValue);
  const maxFloored = Math.floor(objd.maxValue);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const createNumberRange = (start, end, step = 1) => {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
};

function getRandomElements(objd) {
  const minCeiled = Math.ceil(objd.minValue);
  const maxFloored = Math.floor(objd.maxValue) - 1;
  let elements = createNumberRange(minCeiled, maxFloored);
  shuffle(elements);

  return elements;
}

function generateNumber(objd) {
  let result = "error";
  let digits = threeDigits;
  if (objd.minValue < digits.length && objd.maxValue <= digits.length) {
    let element = getRandomInt(objd);
    result = digits[element];
  }
  return result;
}

function cardGen(element, image) {
  let num_card = element.split(" ");
  let cards = num_card[1].split("/");
  let card_fist = cards[0].split(".");
  let card_second = cards[1].split(".");
  return [card_fist[0], card_fist[1], card_second[0], card_second[1]];
}

function numbersRepeatable(objd) {
  for (let i = 0; i < objd.amount; i++) {
    let object = cardGen(generateNumber(objd));
    if (objd.image == 1) {
      memoNums.push(imgGenenrator(object[0], 1) + imgGenenrator(object[1], 2));
      memoNums.push(imgGenenrator(object[2], 1) + imgGenenrator(object[3], 2));
    } else if (objd.image == 2) {
      memoNums.push(
        imgGenenrator(object[0], 1) +
          imgGenenrator(object[1], 2) +
          imgGenenrator(object[2], 3) +
          imgGenenrator(object[3], 4)
      );
    }
  }
}
function numbersUnrepeatable(objd) {
  let digits = objd.numberSystem == 3 ? threeDigits : twoDigits;
  if (objd.minValue < digits.length && objd.maxValue <= digits.length) {
    if (objd.image == 1) {
      let elements = getRandomElements(objd);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        memoNums.push(digits[element]);
      }
    } else if (objd.image == 2) {
      let elements = getRandomElements(objd);
      let elements2 = getRandomElements(objd);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const element2 = elements2[i];
        memoNums.push(digits[element] + " " + digits(element2));
      }
    } else if (objd.image == 3) {
      let elements = getRandomElements(objd);
      let elements2 = getRandomElements(objd);
      let elements3 = getRandomElements(objd);

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const element2 = elements2[i];
        const element3 = elements3[i];
        memoNums.push(
          digits[element] + " " + digits(element2) + " " + digits(element3)
        );
      }
    }
  }
}

function generateNums(objd) {
  if (objd.slownumbers) {
    let slownumbers = [...objd.slownumbers];
    for (let i = 0; i < objd.slownumbers.length; i++) {
      let element = getRandomInt({ minValue: 0, maxValue: slownumbers.length });
      memoNums.push(slownumbers[element]);
      slownumbers.splice(element, 1);
    }
  } else {
    if (objd.repeatable == "true") {
      numbersRepeatable(objd);
    } else {
      numbersUnrepeatable(objd);
    }
    if (objd.sorted == "1") {
      memoNums.sort((a, b) => parseInt(a) - parseInt(b));
    } else if (objd.sorted == "2") {
      memoNums.sort((a, b) => parseInt(b) - parseInt(a));
    }
  }
}

function getData(form) {
  obj = {
    numberSystem: 2,
    image: 1,
    amount: 100,
    minValue: 0,
    maxValue: 1360,
    slownumbers: false,
    repeatable: false,
    sorted: 0,
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
    if (pair[0] == "repeatable") {
      obj.repeatable = pair[1];
    }
    if (pair[0] == "sorted") {
      obj.sorted = pair[1];
    }
    if (pair[0] == "slownumbers") {
      if (pair[1] != "") {
        let num = pair[1].split(" ");
        obj.slownumbers = num;
      }
    }
    if (pair[0] == "autoAdvanced") {
      if (pair[1] !== "") obj.autoAdvanced = parseInt(pair[1]) * 10;
    }
  }
  return obj;
}
