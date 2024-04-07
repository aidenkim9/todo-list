const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  li.id = newToDoObj.id;
  const button = document.createElement("button");
  button.innerText = "done";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todos.push(newToDoObj);
  todoInput.value = "";
  paintToDo(newToDoObj);
  saveTodos();
}

todoForm.addEventListener("submit", submitToDo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
