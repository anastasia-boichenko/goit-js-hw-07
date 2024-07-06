const bodyElem = document.querySelector("body");
const spanElem = document.querySelector(".color");
const btnElem = document.querySelector(".change-color");
btnElem.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  bodyElem.style.background = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}
