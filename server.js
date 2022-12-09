// open libraries
const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

class Task {
  _isDone = false;
  
  constructor(id, text, isDone) {
    this._isDone = isDone || this._isDone;
    this._id = id;
    this._text = text;
  }

  get id() {
    return this._id;
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

  constructor(id, text, isDone, isUrgent, dueDate) {
    super(id, text, isDone);
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

const state = {
  count: 0,
  items: [],
  tasks: [],
};

app.use(express.static("public"));
app.use(express.json());

app.post('/api/delete-task', function(req, res) {
let taskList = state.tasks;
  let i=0;
  for (; i<taskList.length; i+=1) {
    if (taskList[i].id === req.body.id) {
      break;
    }
  }
  taskList.splice(i, 1)
  res.end();
});

function* generateId() {
  let i=1;
  while(true) {
    yield i;
    i+=1;
  }

}

const idGenerator = generateId();

app.post('/api/task', (req, res) => {

  let task;
  let id = idGenerator.next();
  
  if(req.body._isUrgent) {
    task = new UrgentTask(id.value, req.body._text, req.body.isDone, req.body.isUrgent, req.body._dueDate);
    console.log(task);
  } else {
    task = new Task(id.value, req.body._text, req.body.isDone);
    } 
    
  state.tasks.push(task);
  res.json(task);

});

app.post('/api/task/:id/update', (req, res) => {
  const id = Number(req.params.id);
  const isDone = req.body.isDone;

  for(let i = 0; i < state.tasks.length; i += 1) {
    if (state.tasks[i].id === id) {
      state.tasks[i]._isDone = isDone;
      break;
    }
  }
  res.end();
})

app.post('/api/clear', (req, res) => {
  state.tasks = [];
  res.end();
})

app.get('/api/tasks', (req, res) => {
  res.json(state.tasks);
});

app.post('/api/filter', (req, res) => {
  
  state.tasks.forEach(task => {
    if (task.text.includes(req.body.text)) {
      task.isFiltered = true;
    }
  })
  res.end();
})

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})