document.getElementById("scroll").addEventListener("click", function () {
  window.scrollTo({
    top: 1184,
    behavior: "smooth",
  });
});

document.getElementById("scroll-1").addEventListener("click", function () {
  window.scrollTo({
    top: 1184,
    behavior: "smooth",
  });
});

const today = new Date();

const day = today.getDate();

const month = String(today.getMonth() + 1).padStart(2, "0");

const year = today.getFullYear();

document.getElementById("dateDay").textContent = day;
document.getElementById("dateMonth").textContent = month;
document.getElementById("dateYear").textContent = year;

const box4 = document.querySelector(".rectangle-27");
const box3 = document.querySelector(".rectangle-28");
const box2 = document.querySelector(".rectangle-29");
const box1 = document.querySelector(".rectangle-31");
const switchButton = document.querySelector("#switchButton");
const switchButton1 = document.querySelector("#sharrowBtn");

const boxes = [box1, box2, box3, box4];

let activeIndex = 0;
let timer = null;

switchButton1.addEventListener("click", () => {
  clearInterval(timer);
  startAutoSwitch();
  switchActiveBox();
});

switchButton.addEventListener("click", () => {
  clearInterval(timer);
  startAutoSwitch();
  switchActiveBox();
});

function setActiveBox(rectangle) {
  clearInterval(timer);
  boxes.forEach((b) => b.classList.remove("active"));
  activeIndex = boxes.indexOf(rectangle);
  rectangle.classList.add("active");
  startAutoSwitch();
}

function switchActiveBox() {
  boxes[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % boxes.length;

  boxes[activeIndex].classList.add("active");
}

function startAutoSwitch() {
  timer = setInterval(switchActiveBox, 10000);
}

boxes.forEach((rectangle) => {
  rectangle.addEventListener("click", () => setActiveBox(rectangle));
});

boxes[activeIndex].classList.add("active");

startAutoSwitch();

const texts = ["NORTH SHORE", "SOUTH SHORE", "WEST SHORE", "EAST SHORE"];
let currentTextIndex = 0;

const textDisplay = document.querySelector("#textDisplay");

let textTimer = 0;

function updateText() {
  setTimeout(() => {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    textDisplay.textContent = texts[currentTextIndex];
    textDisplay.style.opacity = 1;
  }, 50);
}

function startTextRotation() {
  textTimer = setInterval(updateText, 10000);
}

switchButton.addEventListener("click", () => {
  clearInterval(textTimer);
  updateText();
  startTextRotation();
});

switchButton1.addEventListener("click", () => {
  clearInterval(textTimer);
  updateText();
  startTextRotation();
});

textDisplay.textContent = texts[currentTextIndex];
startTextRotation();

boxes.forEach((rectangle, index) => {
  rectangle.addEventListener("click", () => {
    clearInterval(textTimer);
    currentTextIndex = index;
    textDisplay.textContent = texts[currentTextIndex];
    startTextRotation();
  });
});
