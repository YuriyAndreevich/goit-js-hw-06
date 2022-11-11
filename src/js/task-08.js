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
  const user = {};
  user.email = email.value;
  user.password = password.value;
  console.log(`email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
}
