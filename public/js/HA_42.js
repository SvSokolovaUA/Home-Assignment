'use strict';

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
}

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
const clearTasksButton = document.getElementsByClassName("clear-tasks button")[0];
const urgentTask = document.getElementById("urgent-task");
const date = document.getElementById("due-date");
const isUrgentTask = document.getElementById('urgent-not-urgent');

class Task {
    _isDone = false;
    
    constructor(text, isDone) {
      this._isDone = isDone || this._isDone;
      this._text = text;
    }
    
    get text() {
      return this._text;
    }
  
    get isDone() {
      return this._isDone;
    }
  
  }
  
  class UrgentTask extends Task {
    _isUrgent = true;
  
    constructor(text, isDone, isUrgent, dueDate) {
      super(text, isDone);
      this._dueDate = dueDate;
      this._isUrgent = isUrgent || this._isUrgent;
    }
  
    get isUrgent(){
      return this._isUrgent;
    }
    
    get dueDate() {
      return this._dueDate;
    }
  
  }

function showNewTodo(todo) {
    // { id, text, isDone, isUrgent, dueDate, isFiltered }
  const li = document.createElement("li");
  li.className = "todo-item";
  li.id = `item_${todo._id}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  if (todo._isDone) {
  checkbox.checked = todo._isDone;
  }

  let taskText;
    
  if (todo._isUrgent) {
    taskText = document.createTextNode(` ${todo._text}. Task is urgent. Due date - ${todo._dueDate}  `);
  } else {
    taskText = document.createTextNode(` ${todo._text} `);
  }
  
  const deleteButton = document.createElement("a");
  deleteButton.className = "delete";
  deleteButton.href = "#"
  deleteButton.appendChild(document.createTextNode("x"));

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteButton);

  tasks.appendChild(li);

  if (!todo._isFiltered) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }

}

async function onNewTodo(event) {
  event.preventDefault();

  const text = taskInput.value;
  if (text == '') return;
  taskInput.value = '';

  let isUrgent;
  let newTask;
  let todo;

  if (urgentTask.checked) {

    isUrgent = true;
    urgentTask.checked = false;

  } else {isUrgent = false; }

    if (isUrgent) {

        newTask = new UrgentTask(text, false, true, date.value);

    } else {
        
        newTask = new Task(text, false);

    }

    const response = await post('/api/task', newTask);
    todo = await response.json();
    
    showNewTodo(todo);

}

async function onStatusChanged(event) {
  const target = event.target;

  const checked = target.checked;
  const parent = target.parentElement;
  const [, id] = parent.id.split('_');

    try {

        let result = await post(`/api/task/${id}/update`, { isDone: checked }); 
            if (!result.ok) {
                target.checked = !checked;
            }
    } catch(ex) {
        target.checked = !checked;
    }

}

form.addEventListener("submit", onNewTodo);

let existingTasks = await fetch('/api/tasks')
    .then(res => res.json());

existingTasks.forEach(t => showNewTodo(t));

async function onTaskDelete (event) {

  event.preventDefault();

  const [, id] = event.target.parentNode.id.split('_');
  
  let isToDel = await post('/api/delete-task', {id: Number(id)});

    if (!isToDel.ok) {
        return;
    } else {
        event.target.parentNode.remove();
    }
  
}

function onTasks (event) {
  const target = event.target;

  if (target.nodeName === "INPUT") {
    onStatusChanged(event);
  } else if (target.nodeName === "A" & target.classList.contains('delete')) {
    onTaskDelete(event);
  } else { 
    return;
    }
}

tasks.addEventListener("click", onTasks);

async function onClearTasks(event) {
  event.preventDefault();

  const allTasks = Array.from(tasks.children);

  let isRemovedTasks = await post('api/clear', allTasks);
   
    if (!isRemovedTasks.ok) {
        return;
    } else {
        allTasks.forEach(task => task.remove());
    }
  
}

clearTasksButton.addEventListener('click', onClearTasks);

const filter = document.getElementById('filter');

async function onFilter(event) {
event.preventDefault();

const tasksForFiltering = document.querySelectorAll("li.todo-item");

const text = filter.value;
let isFiltered = await post('api/filter', {text: text});

    if (!isFiltered.ok) {
        return;

    } else {
    
        tasksForFiltering.forEach(task => {
            if (task.textContent.includes(text)) {
            task.style.display = "";
            } else {
            task.style.display = "none";
            }
        });
    }

  
}

filter.addEventListener('keyup', onFilter);
