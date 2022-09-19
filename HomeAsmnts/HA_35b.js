"use strict";
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
const parentEl = document.getElementById("task-list");
let nextId = 5;

function onSubmit(e) {
    addElement(e);
    }

function onEnter(e) {
    if (e.key === "Enter") {
     addElement(e);   
    }
}
  
  form.addEventListener("submit", onSubmit); 
  form.addEventListener("keydown", onEnter);

    
    function addElement(e) {

    e.preventDefault();
 
    let newListEl = document.createElement("li");
    newListEl.className = "todo-item";
    newListEl.id = `item${nextId}`;

    let newInput = document.createElement("input");
    newInput.type = "checkbox";
    
    let xsign = document.createElement("a");
    xsign.appendChild(document.createTextNode("x"));
    xsign.className = "delete";
    xsign.href = "#";
    
    newListEl.appendChild(newInput);
    newListEl.appendChild(document.createTextNode(`  ${taskInput.value} `));
    newListEl.appendChild(xsign);

    parentEl.appendChild(newListEl);

    nextId+=1;
    taskInput.value = ""; 

  }
  
