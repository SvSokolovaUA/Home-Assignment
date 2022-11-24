// open libraries
const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

const state = {
  count: 0,
  items: [],
  tasks: [],
};

app.use(express.static("public"));
app.use(express.json());

app.post('/api/delete-task', function(req, res) {
  state.tasks.splice(req.body.id, 1)
  res.end();
});

let id = 1;

app.post('/api/task', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone };
  state.tasks.push(task);
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
  console.log(state.tasks);
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