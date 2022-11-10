"use strict";

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");

let id = 1;
let checkboxStatus = false;

function createTask(task) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item${task.id}`;
            
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checkboxStatus;
    
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

// DOWNLOAD ALL EXISTING TASKS FROM SERVER AT THE VERY BEGINNING
fetch("api/result")
    .then(response => response.json())
    .then((task => task.forEach(task => createTask(task))));

// CREAT NEW TASK AND PUSH CHANGES TO THE SERVER
const post = (url, data) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
}

form.addEventListener("submit", _ => {
   
    const text = taskInput.value;
    taskInput.value = "";

    if (text === "") return;
    
    const newTask = {text: text, id: id, checkboxStatus: checkboxStatus};
    
    post('api/task-add', newTask);

    createTask(newTask);

    id+=1;

});


// DELETE SOME TASK AND PUSH CHANGES TO THE SERVER
tasks.addEventListener("click", event => {
    const eTarget = event.target;

    if (
        eTarget.nodeName != "A" ||
        !eTarget.classList.contains("delete")
    ) {
        return;
    }
    
    const text = eTarget.parentNode.firstElementChild.nextSibling.textContent.trim();
    const checkbox = eTarget.parentNode.firstElementChild.checked;

    const deletedTask = {
        text: text,
        id: Number(eTarget.parentNode.id.slice(4)),
        checkboxStatus: checkbox,
    }

    post('api/task-del', deletedTask);

    eTarget.parentNode.remove();

});

// изменение внешнего вида checkbox при измнении его статуса

tasks.addEventListener("change", e => {
        
    if (e.target.type != "checkbox") {
        return;
    }

    e.preventDefault();
    
    if (e.target.checked === true) {
        e.target.parentNode.style.color = "grey";
    } else {e.target.parentNode.style.color = "black";}
    
    const changedTask = {
        text: e.target.nextSibling.textContent.trim(),
        id: Number(e.target.parentNode.id.slice(4)),
        checkboxStatus: e.target.checked,
    }

     post('api/task-change', changedTask);
    });
    
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