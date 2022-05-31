function makePoint(x, y) {
  let p = {
    x: x,
    y: y,
    distanceFromOrigin: function () { return Math.sqrt(this.x * this.x + this.y * this.y) }
  };
  p.distanceFrom = function (p2) {
    const dx = p2.x - this.x;
    const dy = p2.y - this.y;

    return Math.sqrt(dx * dx + dy * dy)
  }

  return p;
}

let p = makePoint(3, 4);

console.log(p);

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFromOrigin = function () { return Math.sqrt(this.x * this.x + this.y * this.y) }
  this.distanceFrom = function (p2) {
    const dx = p2.x - this.x;
    const dy = p2.y - this.y;

    return Math.sqrt(dx * dx + dy * dy)
  }

}

console.log(new Point(1, 2));
let p2 = new Point(3, 4);
console.log(p2);

console.log(p2.x);

// ------------------------

function Person(firstName, lastName) {
  this.name = firstName;
  this.surName = lastName;
}

let john = new Person("John", "Doe");

let p2 = john;
p2.name = "Peter";
console.log(john);
console.log(p2);

/// -----------

function Person(firstName, lastName) {
  this.name = firstName;
  this.surName = lastName;
}

function someFunction(t) {
  t.surName = "Unknown";
}

function pusher(t) {
  t.push(5);
}

const john = new Person("John", "Doe");

someFunction(john);

console.log(john);

const a = [1, 2, 3];

pusher(a);

console.log(a);

///

// assignment 2
let a = [3, 5, 1, -8, 12, 0];
let b = sortCopy(a);

console.log(a) // 3, 5, 1, -8, 12, 0
console.log(b) // -8, 0, 1, 3, 5, 12