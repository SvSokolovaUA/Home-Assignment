// 4. Посчитать количество слов в строке, которые длиннее, чем 3 символа
function countWordsWithMoreThan3Letters(str) {
  let wordsCounter = 0;
  let lettersCounter = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != " ") {
      lettersCounter += 1;
      if (lettersCounter == 4) {
        wordsCounter += 1;
      }
    } else {
      lettersCounter = 0;
    }
  }

  return wordsCounter;
}
console.log(countWordsWithMoreThan3Letters("a la guerre com a la guerre"));

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
  x: 3,
  y: 8
}

// 2. Using rectangle
function isInRectangle(r, p) {
  let halfWidth = r.width / 2;
  let halfHeight = r.height / 2;

  return (p.x > r.x - halfWidth) && (p.x < r.x + halfWidth)
    && (p.y > r.y - halfHeight) && (p.y < r.y + halfHeight);
} // bool: true or false

// 3. Using [rectangle, rectangle2, ... ]
function isInManyRectangles(rectangles, p) {
  for (let i = 0; i < rectangles.length; i += 1) {
    if (isInRectangle(rectangles[i], p)) {
      return true;
    }
  }

  return false;
} // bool: true or false

console.log(isInRectangle(rectangle, point))
console.log(isInManyRectangles([rectangle, rectangle2, rectangle3], point))


/// ---- 

let x = 1;
x += 1; // x = x + 1;
console.log(x);
x = "My name"
console.log(x);
{
  for (let x = 1; x < 5; x += 1) {

  }
}
console.log(x);
const y = 1;
// y += 1;
console.log(y);
// y = "string";
console.log(y);
{
  for (let y = 1; y < 5; y += 1) {

  }
}

const person = {
  firstName: "Peter",
  lastName: "Jackson",
}

console.log(person);
person.lastName = "Peterson";
console.log(person);


/// --- 


function greeter(name) {
  return `Hello, ${name}`;
}

let square = function (x) {
  return x * x;
}


console.log(square(5));
square = greeter;
console.log(square(5));

    // square = "Hello, world";
    // console.log(square);

    // --------------

const victor = {
  firstName: "Victor",
  lastName: "Peterson",
  getFullName: function (prefix) {
    console.log(this);
    return prefix + this.firstName + " " + this.lastName;
  }
};

function getFullName(p, prefix) {
  return `${prefix} ${p.firstName} ${p.lastName}`;
}

console.log(getFullName(victor, "Dr."));
console.log(victor.getFullName("Dr."));


let rectangle = {
  x: -3,
  y: -2,
  width: 5,
  height: 2,
  isInRectangle: function (p) {
    let halfWidth = this.width / 2;
    let halfHeight = this.height / 2;

    return (p.x > this.x - halfWidth) && (p.x < this.x + halfWidth)
      && (p.y > this.y - halfHeight) && (p.y < this.y + halfHeight);
  } // bool: true or false
}

let point = {
  x: -3,
  y: -2
}

// 2. Using rectangle

console.log(rectangle.isInRectangle(point));
console.log(point.isInRectangle(rectangle));