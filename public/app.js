let option = 2;
let imagePerLocus = 1;
let arrange = { min: 0, max: 100 };
let unrepeatable = false;
let amounofnumbers = 100;
let autoAdvanced = false;
let clickconter = 0;
let twoDigits = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
];
//FUNCTIONS

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function randomNumbers(
  option,
  imagePerLocus,
  arrange,
  unrepeatable,
  amounofnumbers,
  getRandomInt
) {
  let numbers = [];
  if (option == 2 && imagePerLocus == 1) {
    if (unrepeatable == false) {
      for (let i = 0; i <= amounofnumbers; i++) {
        numbers.push(twoDigits[getRandomInt(arrange.min, arrange.max)]);
      }
    } else {
      if (amounofnumbers > 100 || amounofnumbers > arrange.max - arrange.min) {
        amounofnumbers == arrange.max - arrange.min;
      }
      for (let i = 0; i <= amounofnumbers; i++) {
        numbers.push(twoDigits[getRandomInt(arrange.min, arrange.max)]);
      }
    }
  } else if (option == 2 && imagePerLocus == 2) {
    if (unrepeatable == false) {
      for (let i = 0; i <= amounofnumbers; i++) {
        numbers.push(
          twoDigits[getRandomInt(arrange.min, arrange.max)] +
            "" +
            twoDigits[getRandomInt(arrange.min, arrange.max)]
        );
      }
    } else {
      if (amounofnumbers > 100 || amounofnumbers > arrange.max - arrange.min) {
        amounofnumbers == arrange.max - arrange.min;
      }
      for (let i = 0; i <= amounofnumbers; i++) {
        numbers.push(
          twoDigits[getRandomInt(arrange.min, arrange.max)] +
            "" +
            twoDigits[getRandomInt(arrange.min, arrange.max)]
        );
      }
    }
  }
  return numbers;
}

function nextNum(numbers) {
  document.getElementById("number1").innerHTML = numbers;
  clickconter++;
  changeClick(numbers);
}
function changeClick(numbers) {
  document
    .getElementById("nextNumber")
    .setAttribute("onclick", "javascript: nextNum(" + numbers + ")");
}
function changeNumbersWithInterval(lete, ms) {
  setInterval(() => {
    document.getElementById("number1").innerHTML = randomNumbers(lete);
  }, ms);
}
function getData(form) {
  var formData = new FormData(form);
  for (var pair of formData.entries()) {
    if (pair[0] == "options") {
      changeClick(pair[1]);
      option = pair[1];
    }
    if (pair[0] == "imagePerLocus") {
      imagePerLocus = pair[1];
    }
    if (pair[0] == "arrange") {
      let num = pair[1].split("-");
      arrange.min = num[0];
      arrange.max = num[1];
    }
    if (pair[0] == "unrepeatable") {
      unrepeatable = pair[1];
    }
    if (pair[0] == "amounofnumbers") {
      if (pair[1] !== "") amounofnumbers = pair[1];
    }
    if (pair[0] == "autoAdvanced") {
      if (pair[1] !== "") autoAdvanced = pair[1];
    }
  }
}

//DOM
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("myForm").style.display = "none";
  document.getElementById("numbersDisplay").style.display = "block";
  getData(e.target);
  let numbers = randomNumbers(
    option,
    imagePerLocus,
    arrange,
    unrepeatable,
    amounofnumbers,
    getRandomInt
  );
  console.log(numbers);
  changeClick(numbers[2]);
});
