function Point(x, y) {
  this.x = x;
  this.y = y;

  this.distanceFromOrigin = function () { return Math.sqrt(this.x * this.x + this.y * this.y) }

}

Point.prototype.distanceFrom = function (p2) {
  const dx = p2.x - this.x;
  const dy = p2.y - this.y;

  return Math.sqrt(dx * dx + dy * dy)
}
Point.prototype.xCenter = 0;
Point.prototype.yCenter = 5;

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

console.log(p1);
console.log(p2);

console.log(p1.distanceFrom(p2));
console.log(p2.distanceFromOrigin());

console.log(p1.xCenter);
console.log(p2.xCenter);

p2.xCenter = 4;
Point.prototype.xCenter = 7;

console.log(p2.xCenter);
console.log(p1.xCenter)

// -----

let a = [3, 4, 1, -1, 0];

function filter(arr, threshold) {
  let b = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > threshold) {
      b.push(arr[i]);
    }
  }

  return b;
} // return a copy of a with elements which are > threshold

console.log(filter(a, 1)); // [3, 4]
console.log(filter([-5, 7, -11, 0], -4)); // [7, 0]


function sort(arr) {
      ....
}

console.log(a) // [3, 4, 1, -1, 0];
sort(a);
console.log(a) // [-1, 0, 1, 3, 4];