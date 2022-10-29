"use strict";

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");

let currentTasks;

let id = 1;

// проверка localStorage на наличие в нем задач по ключу "current", если localStorage не пустой - 
// загрузить ранее созданные задачи на страницу
if (localStorage.getItem("current") === null) {

    currentTasks = [];

} else { 

    currentTasks = JSON.parse(localStorage.getItem("current"));
    
    currentTasks.forEach(el => createTask(el));
    let lastTask = currentTasks[currentTasks.length-1];
    id = lastTask.id + 1;

    const checkBox = tasks.querySelectorAll("input");
    checkBox.forEach(el => el.addEventListener("change", onCheckboxsChange));

}

function createTask(task) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item${task.id}`;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checkboxStatus;
    checkbox.addEventListener("change", onCheckboxsChange)

    const taskText = document.createTextNode(` ${task.text} `);
    if(task.checkboxStatus === true) {
        li.style.color = "grey";
    } else {li.style.color = "black"}

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
    console.log(event.target.parentNode.querySelector("input"));

    event.target.parentNode.querySelector("input").removeEventListener("change", onCheckboxsChange);

    event.target.parentNode.remove();

    let newCurrentTasks = [];

    currentTasks.forEach(el => {
        if (event.target.parentNode.id !== `item${el.id}`) {
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
  
    const status = false;

    const task = {
        text: text,
        id: id,
        checkboxStatus: status,
    };

    if (text === "") return;

    createTask(task);

    currentTasks.push(task);

    id+=1;

    localStorage.setItem("current", JSON.stringify(currentTasks));
  
}

form.addEventListener("submit", onNewTaskSubmit);

// изменение внешнего вида checkbox при измнении его статуса

function onCheckboxsChange(e) {

    e.preventDefault();

    const taskText = e.target.nextSibling.textContent;

    if (e.target.checked === true) {
        e.target.parentNode.style.color = "grey";
    } else {e.target.parentNode.style.color = "black";}

    let newCurrentTasks = [];

    currentTasks = JSON.parse(localStorage.getItem("current"));

    currentTasks.forEach(el => {

        if (e.target.parentElement.id === `item${el.id}`) {

        el.checkboxStatus = e.target.checked;
        }

        newCurrentTasks.push({text: el.text, id: el.id, checkboxStatus: el.checkboxStatus});
        
    })

    localStorage.setItem("current", JSON.stringify(newCurrentTasks));

}

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