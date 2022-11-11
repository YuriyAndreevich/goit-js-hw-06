const refs = {
  countDecrement: document.querySelector(`[data-action="decrement"]`),
  countIncrement: document.querySelector(`[data-action="increment"]`),
  countValue: document.querySelector(`#value`),
};
let counterValue = 0;
function onCountDecrement() {
  refs.countValue.textContent = counterValue -= 1;
}
function onCountIncrement() {
  refs.countValue.textContent = counterValue += 1;
}
refs.countDecrement.addEventListener(`click`, onCountDecrement);
refs.countIncrement.addEventListener(`click`, onCountIncrement);
