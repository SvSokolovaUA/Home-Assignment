// open libraries
const express = require("express");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

app.use(express.static("public")); // запит на статичні файли - шукати в папці public, яку ми створили

app.get('/api/result', function(req, res) {
  res.json([{text: "task 1", id: 1, checkboxStatus: false}, {text: "task 2", id: 2, checkboxStatus: false}, {text: "task 3", id: 3, checkboxStatus: false}]);
});

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})

