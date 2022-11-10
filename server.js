// open libraries
const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

let tasks = [];

app.use(express.static("public"));
app.use(express.json());

//
app.get('/api/result', function(req, res) {
  res.json(tasks);
});

app.post('/api/task-add', function(req, res) {
  tasks.push(req.body);
  res.end();
});

app.post('/api/task-del', function(req, res) {
  
  tasks.splice(req.body.id-1, 1);
  res.end();

});

app.post('/api/task-change', function(req, res) {
  
  tasks.splice(req.body.id-1, 1, req.body);
  res.end();

});

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})