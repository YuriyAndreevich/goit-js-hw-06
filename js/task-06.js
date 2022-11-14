const inputElement = document.getElementById("validation-input");
inputElement.addEventListener("blur", hendleInput);
function hendleInput(event) {
  const valueRef = Number(event.currentTarget.getAttribute("data-length"));
  if (event.currentTarget.value.length === valueRef) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
    return;
  }
  inputElement.classList.add("invalid");
  inputElement.classList.remove("valid");
}
