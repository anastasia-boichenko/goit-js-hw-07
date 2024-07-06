const divElemBox = document.querySelector("#boxes");
const inputElem = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  let amount = inputElem.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputElem.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divCreateBox = "";

  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + 10 * i;
    const boxColor = getRandomHexColor();
    divCreateBox += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`;
  }
  divElemBox.innerHTML = divCreateBox;
}

function destroyBoxes() {
  divElemBox.innerHTML = "";
}
