const input = document.querySelector(`#name-input`);
const title = document.querySelector(`#name-output`);
input.addEventListener(`input`, newInput);

function newInput(event) {
  title.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    title.textContent = "Anonymous";
  }
}
