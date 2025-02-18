document.getElementById("scroll-sleep").addEventListener("click", function () {
  window.scrollTo({
    top: 5300,
    behavior: "smooth",
  });
});

document
  .getElementById("book-flight-sleep")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document
  .getElementById("book-flight-pS")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document.getElementById("sleep-svg").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let currentNumber = 4;

const numberDisplay = document.getElementById("numberDisplay");
const numberDisplayOne = document.getElementById("numberDisplay-1");
const decrementDiv = document.getElementById("decrementDiv");
const decrementDivOne = document.getElementById("decrementDiv-1");
const incrementDiv = document.getElementById("incrementDiv");
const incrementDivO = document.getElementById("incrementDiv-1");
const incrementDivT = document.getElementById("incrementDiv-2");
const incrementDivTHREE = document.getElementById("incrementDiv-3");

function updateDisplay() {
  numberDisplay.innerText = currentNumber;
}

function updateDisplayTWO() {
  numberDisplayOne.innerText = currentNumber;
}

decrementDiv.addEventListener("click", () => {
  currentNumber -= 1;
  updateDisplay();
});

decrementDivOne.addEventListener("click", () => {
  currentNumber -= 1;
  updateDisplayTWO();
});

incrementDiv.addEventListener("click", () => {
  currentNumber += 1;
  updateDisplay();
});

incrementDivO.addEventListener("click", () => {
  currentNumber += 1;
  updateDisplay();
});

incrementDivT.addEventListener("click", () => {
  currentNumber += 1;
  updateDisplayTWO();
});

incrementDivTHREE.addEventListener("click", () => {
  currentNumber += 1;
  updateDisplayTWO();
});
