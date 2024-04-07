const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const afterLogIn = document.querySelector("#after-login");
const HIDDEN_CLASSNAME = "hidden";

function onSubmitBtn(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  handleGreeting(username);
}

function handleGreeting(username) {
  greeting.innerText = `hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  afterLogIn.classList.remove(HIDDEN_CLASSNAME);
}

const USERNAME_KEY = localStorage.getItem("username");

if (USERNAME_KEY === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  afterLogIn.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitBtn);
} else {
  handleGreeting(USERNAME_KEY);
}
