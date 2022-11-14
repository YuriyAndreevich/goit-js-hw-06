const form = document.querySelector(`.login-form`);
const button = document.querySelector(`.submit`);
form.addEventListener(`submit`, handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Заполни форму!`);
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  event.currentTarget.reset();
}
