import '/src/style/style.css';

import {
  add as addTask,
  tasks,
  removeTask,
  toggleDone,
  } from './service/tasks.js';

import { render } from './service/render.js';

import { remove } from './service/LS.js'

const out = document.querySelector(".task-container");
const form = document.querySelector(".form");
const input = document.querySelector(".input-task");
const hidden = document.querySelector(".out-container_pending");
const btnRemoveAll = document.querySelector(".btn-remove__all");
const outCaunter = document.querySelector('.out-caunter')


//проверка есть ли задачи и добавление класса если их нет
const checkVisibilityHidden = () => {
  out.children.length <= 0
    ? hidden.classList.remove("hidden")
    : hidden.classList.add("hidden");
};

render.allTasks(out, tasks);
checkVisibilityHidden();
renderQtyTask(outCaunter);

// событие добавляет задачу
form.addEventListener("submit", function (event) {
  event.preventDefault();

  addTask(input.value);
  render.allTasks(out, tasks);

  input.focus();
  input.value = "";
  
  renderQtyTask(outCaunter)
  checkVisibilityHidden();
});
out.addEventListener("click", deleteHtmlTask);
out.addEventListener("click", doneTask);

//удаление задачи из html
function deleteHtmlTask(event) {
  if (event.target.dataset.action === "delete") {
    removeTask(event.target.dataset.id);
    render.allTasks(out, tasks);
    checkVisibilityHidden();
  }
}

// отметка о выполнении
function doneTask(event) {
  if (event.target.dataset.action === "done") {
    toggleDone(event.target.dataset.id);
    render.allTasks(out, tasks);
  }
  renderQtyTask(outCaunter)
}

btnRemoveAll.addEventListener('click',() => {
  remove('tasks');
  tasks.length = 0;
  render.allTasks(out, tasks);
  checkVisibilityHidden();
  renderQtyTask(outCaunter)
})

function renderQtyTask (container) {
  const AllTaskDone = tasks.filter((item) => item.done === true);
  const QtyDone = AllTaskDone.length;
  const AllTasksLength = tasks.length;
  container.innerHTML = `<h3>Выполненно ${QtyDone} задачи, не выполенно ${AllTasksLength}</h3>`
}