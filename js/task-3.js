const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("input", enterText);

function enterText() {
  const cleanSpace = inputElem.value.trim();

  cleanSpace !== ""
    ? (outputElem.textContent = cleanSpace)
    : (outputElem.textContent = "Anonymus");
}
