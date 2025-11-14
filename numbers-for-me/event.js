document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (memoNums.length !== 1 && resultarr == 0) {
    if (evt.keyCode == 39) {
      memoNext();
    }
    if (evt.keyCode == 37) {
      memoPrev();
    }
    if (evt.keyCode == 32) {
      memoReturn();
    } else if (evt.keyCode == 38 || evt.keyCode == 40) {
      memoElo();
    }
  }
};
document.addEventListener("keydown", function (evt) {
  if (evt.key === "v") {
    if (memoNums.length == 1 && resultarr == 0) {
      pasteButton.click();
    }
  }
  if (evt.key === "c") {
    if (memoNums.length == 1 && resultarr == 0) {
      clearSlowButton.click();
    } else if (memoNums.length !== 1 && resultarr !== 0) {
      copyTimeButton.click();
    }
  }
  if (evt.key === "x") {
    if (memoNums.length !== 1 && resultarr !== 0) {
      copyResultsButton.click();
    }
  }
  if (evt.key === "s") {
    if (memoNums.length !== 1 && resultarr !== 0) {
      sortResultsButton.click();
    }
  }

  if (evt.key === "Enter") {
    if (memoNums.length == 1 && resultarr == 0) {
      evt.preventDefault();
      document.getElementById("numSettings_form").requestSubmit();
    } else if (memoNums.length !== 1 && resultarr == 0) {
      document.getElementById("memoEnd").click();
    } else if (memoNums.length !== 1 && resultarr !== 0) {
      document.getElementById("resultEnd").click();
    }
  }
});

document
  .getElementById("numSettings_form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("numSettings").style.display = "none";
    document.getElementById("numMemo").style.display = "flex";
    var numSettings = getData(e.target);
    generateNums(numSettings);
    memoNext();
    start();
    if (numSettings.autoAdvanced != false) {
      interval = setInterval(memoNext, numSettings.autoAdvanced);
    }
  });
document.getElementById("memoEnd").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("numSettings").style.display = "none";
  document.getElementById("numMemo").style.display = "none";
  document.getElementById("numResult").style.display = "block";
  pause();
  endTime = Date.now();
  resultTime[resultTime.length - 1].stop = Date.now();
  resultarr = calculateResults(resultTime);
  printHead(resultarr);
  printResult(resultarr);
  clearInterval(interval);
});
document.getElementById("resultEnd").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("numSettings").style.display = "block";
  document.getElementById("numMemo").style.display = "none";
  document.getElementById("numResult").style.display = "none";
  resultTime = [];
  memoNums = ["START"];
  startTime = 0;
  stop_time = 0;
  stop_time_counter = 0;
  pure_time = 0;
  avaragetime = 0;
  elapsedTime = 0;
  endTime = 0;
  counterClick = 0;
  resultarr = 0;
});

document.getElementById("resultSort").addEventListener("click", function (e) {
  e.preventDefault();
  sortResults(resultarr);
});

const pasteInput = document.getElementById("slowimages");
const copyResultsButton = document.getElementById("copy");
const copyTimeButton = document.getElementById("copyTime");
const sortResultsButton = document.getElementById("resultSort");
const pasteButton = document.getElementById("parseToSlow");
const clearSlowButton = document.getElementById("clearSlow");

pasteButton.addEventListener("click", async () => {
  try {
    // Check if the Clipboard API is supported by the browser
    if (!navigator.clipboard || !navigator.clipboard.readText) {
      alert("Your browser does not support the Clipboard API.");
      return;
    }

    // Request permission to read from the clipboard
    const permissionStatus = await navigator.permissions.query({
      name: "clipboard-read",
    });

    if (
      permissionStatus.state === "granted" ||
      permissionStatus.state === "prompt"
    ) {
      // Permission is granted or user will be prompted.
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText) {
        pasteInput.value = clipboardText; // Set the input value
      }
    } else {
      alert("Permission to read clipboard was denied.");
    }
  } catch (err) {
    console.error("Failed to paste from clipboard:", err);
    alert(
      "Failed to paste from clipboard. Please ensure you have granted permission."
    );
  }
});

clearSlowButton.addEventListener("click", () => {
  pasteInput.value = "";
});
