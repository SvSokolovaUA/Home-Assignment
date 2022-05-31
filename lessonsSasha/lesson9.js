let p1 = {
  x: 1,
  y: 3,
  distanceFromOrigin: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let p2 = {
  x: 3,
  Y: 3,
}

let c;

console.log(p1.y * p1.y);
console.log(p2.y * p2.y);
console.log(p2.Y);
console.log(c);
console.log(p1.distanceFromOrigin())
console.log(p2.distanceFromOrigin())
c = 2;
c = function () { return 2 };
c();

function identity(x) {
  return x.y;
}

console.log(identity(1));
console.log(identity("Hi"));
console.log(identity({ x: 1, y: true }));

// ------------------------
let o = {};
console.log(o);
console.log(o.x);

o.x = 1;
console.log(o);
console.log(o.x);

o.y = 5;
console.log(o);

o.distanceFromOrigin = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
console.log(o);
console.log(o.distanceFromOrigin());

let p = { x: 3, y: 4 }
console.log(p);
p.z = 8;
console.log(p);

// --------------------

let o = {
  x: 0,
  init: function () {
    this.x = 1;
    this.y = 2;
    this.distanceFromOrigin = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
  }
}

console.log(o);
o.init();
console.log(o);
o.init = true;
console.log(o);
console.log(o.distanceFromOrigin());

// ------

const isInRectangle = function (p) {
  let halfWidth = this.width / 2;
  let halfHeight = this.height / 2;

  return (p.x > this.x - halfWidth) && (p.x < this.x + halfWidth)
    && (p.y > this.y - halfHeight) && (p.y < this.y + halfHeight);
};

let rectangle = {
  x: -3,
  y: -2,
  width: 5,
  height: 2,
  isInRectangle: isInRectangle// bool: true or false
}

let rect2 = {
  x: 3,
  y: 4,
  width: 3,
  height: 5,
}

rect2.isInRectangle = isInRectangle;

let p1 = {
  x: 1.8,
  y: 3,
  distanceFromOrigin: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(rect2.isInRectangle(p1));

// -------------------------------------

function makePoint(x, y) {
  let p = { x: x, y: y };
  p.distanceFromOrigin = function () { return Math.sqrt(this.x * this.x + this.y * this.y) }
  p.distanceFrom = function (p2) {
    const dx = p2.x - this.x;
    const dy = p2.y - this.y;

    return Math.sqrt(dx * dx + dy * dy)
  }

  return p;
}

function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;

  return Math.sqrt(dx * dx + dy * dy);
}

let p1 = makePoint(1, 3);
let p2 = makePoint(5, 4);

p1.x = 7;
console.log(p1);
console.log(p1.distanceFromOrigin());
console.log(p2);
console.log(p2.distanceFromOrigin());
console.log(p1.distanceFrom(p2));
console.log(p2.distanceFrom(p1));
console.log(distance(p1, p2));
