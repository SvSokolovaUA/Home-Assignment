// open libraries
const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

class Tasks {
  _isDone = false;
  _isUrgent = false;

  constructor(id, text, isDone, isUrgent) {
    this._isDone = isDone || this._isDone;
    this._isUrgent = isUrgent || this._isUrgent;
    this._id = id;
    this._text = text;
  }

  get isDone() {
    return this._isDone;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  get isUrgent() {
    return this._isUrgent;
  }

}

class UrgentTasks extends Tasks {
  _isUrgent = true;

  constructor(id, text, isDone, isUrgent, dueDate) {
    super(id, text, isDone);
    this._dueDate = dueDate;
    this._isUrgent = isUrgent || this._isUrgent;
  }

  get dueDate() {
    return this._dueDate;
  }

  get isUrgent(){
    return this._isUrgent;
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

let id = 1;

app.post('/api/task', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone, isUrgent: req.body.isUrgent };
  state.tasks.push(new Tasks(task.id, task.text, task.isDone, task.isUrgent));
  id += 1;
  res.json(task);
});

app.post('/api/urgenttask', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone, dueDate: req.body.dueDate, isUrgent: req.body.isUrgent };
  
  state.tasks.push(new UrgentTasks(task.id, task.text, task.isDone, task.isUrgent, task.dueDate));
  id += 1;
  res.json(task);
  
});


app.post('/api/task/:id/update', (req, res) => {
  const id = Number(req.params.id);
  const isDone = req.body.isDone;

  for(let i = 0; i < state.tasks.length; i += 1) {
    if (state.tasks[i].id === id) {
      state.tasks[i].isDone = isDone;
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