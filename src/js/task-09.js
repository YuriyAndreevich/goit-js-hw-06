function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const span = body.querySelector(`.color`);
const button = document.querySelector(`.change-color`);
const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
};

button.addEventListener(`click`, changeColor);
