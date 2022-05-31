// Home assignment #5

let b = [];

let j = 5;
while (j > 0) {
  let elem = Number(prompt("Input next element:"));
  b.push(elem);
  j = j - 1;
}

function minimum(arr) {
  let min = arr[0];
  let j = 0;
  while (j < arr.length) {
    if (min > arr[j]) {
      min = arr[j];
    }
    j += 1;
  }

  return min;
} // minimum

function maximum(arr) {
  let max = arr[0];
  let j = arr.length - 1;
  while (j >= 0) {
    if (max < arr[j]) {
      max = arr[j];
    }
    j -= 1;
  }

  return max;
}

function sum(arr) {
  let s = 0;
  let j = 0;

  while (j < arr.length) {
    s += arr[j];
    j += 1;
  }

  return s;
}

function average(arr) {
  let s = 0;
  let j = 0;

  while (j < arr.length) {
    s += arr[j];
    j += 1;
  }

  let avg = 0;
  if (arr.length > 0) {
    avg = s / arr.length;
  }

  return avg;
}

function average2(arr) {
  let s = sum(arr);

  let avg = 0;
  if (arr.length > 0) {
    avg = s / arr.length;
  }

  return avg;
}




console.log("minimum:", minimum(b));
console.log("maximum:", maximum(b));
console.log("sum:", sum(b));
console.log("average:", average(b));
console.log("average2:", average2(b));


// -----

let personArray = [
  "John",
  "Peterson",
  24
];

console.log(personArray[2]);

let person1 = {
  firstName: "John",
  lastName: "Peterson",
  age: 24,
};

let person2 = {
  firstName: "Peter",
  lastName: "Johnson",
  age: 42,
};

console.log(person1.age);

let point = { x: 2.5, y: 5 };
console.log(point);


function greeter(per) {
  // console.log("Hello, " + per.firstName + " " + per.lastName);
  console.log(`Hello ${per.firstName} ${per.lastName}. Your age is ${per.age}`);
}

greeter(person1);
greeter(person2);
greeter({ firstName: "John", lastName: "Doe" });

// ------
let point1 = { x: 2, y: 7 };
let point2 = { x: 5, y: -3 };

// function distance(x1, y1, x2, y2) {
// }

function distance(p1, p2) {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy)
}

console.log(distance(point1, point2));

let points = [{ x: 1, y: 2 }, { x: 3, y: 7 }, { x: 5, y: -2 }];
// coordinates of the second point in the array:
console.log(points[1]);
console.log(points[1].x, points[1].y);

// rectangle:
let simpleRectangle = {
  width: 7,
  height: 9,
}

let rectangle = {
  x: 0,
  y: 4,
  width: 7,
  height: 9,
}

let rectangle2 = {
  x: 5,
  y: 7,
  width: 2,
  height: 4,
}

let rectangle3 = {
  x: -3,
  y: -2,
  width: 5,
  height: 2,
}

let point = {
  x: 7,
  y: 8
}

// 1. Using simpleRectangle
function isInRectangleSimple(simpleRect, p) {
} // bool: true or false

// 2. Using rectangle
function isInRectangle(rect, p) {
} // bool: true or false

// 3. Using [rectangle, rectangle2, ... ]
function isInManyRectangles(rectangles, p) {
} // bool: true or false

console.log(isInRectangleSimple(simpleRectangle, point))
console.log(isInRectangle(rectangle, point))
console.log(isInManyRectangles([rectangle, rectangle2, rectangle3], point))