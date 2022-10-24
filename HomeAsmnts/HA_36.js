"use strict";

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
let currentId = 1;

let currentTasks;

// проверка localStorage на наличие в нем задач по ключу "current", если localStorage не пустой - 
// загрузить ранее созданные задачи на страницу
if (localStorage.getItem("current") === null) {

    currentTasks = [];

} else { 

    currentTasks = JSON.parse(localStorage.getItem("current"));
    console.log(currentTasks);

    currentTasks.forEach(el => createTask(el));

}


function createTask(text) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item${currentId}`;
    currentId += 1;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createTextNode(` ${text} `);

    const deleteButton = document.createElement("a");
    deleteButton.className = "delete";
    deleteButton.href = "#"
    deleteButton.appendChild(document.createTextNode("x"));

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    tasks.appendChild(li);
}

// Удаление пункта в списке
function deleteItem(event) {
  if (
    event.target.nodeName != "A" ||
    !event.target.classList.contains("delete")
  ) {
    return;
  }
  event.target.parentNode.remove();

  let newCurrentTasks = [];

  currentTasks.forEach(el => {
    if (event.target.parentNode.textContent.includes(el)) {
        newCurrentTasks.push(el);
    }
  })

  localStorage.setItem("current", JSON.stringify(newCurrentTasks));

}

tasks.addEventListener("click", deleteItem);


// Добавление новой задачи в список

function onNewTaskSubmit(e) {
  e.preventDefault();

  const text = taskInput.value;
  taskInput.value = "";

  if (text === "") return;

  createTask(text);

  currentTasks.push(text);

  localStorage.setItem("current", JSON.stringify(currentTasks));
  
}

form.addEventListener("submit", onNewTaskSubmit);

// фильтр - убирает, все, что не соответствует введенному тексту
const filterInput = document.getElementById("filter");

function onFilterChange() {
  const tasksForFiltering = document.querySelectorAll("li.todo-item");

  tasksForFiltering.forEach(task => {
    if (task.textContent.includes(filterInput.value)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }

  });
}

filterInput.addEventListener("keyup", onFilterChange);