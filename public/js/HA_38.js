"use strict";

const tasks = document.getElementById("task-list");

fetch("api/result")
    .then(response => response.json())
    .then((task => task.forEach(task => createTask(task))));

function createTask(task) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item${task.id}`;
        
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checkboxStatus;
    // checkbox.addEventListener("change", onCheckboxsChange)
    
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

