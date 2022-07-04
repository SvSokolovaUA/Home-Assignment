'use strict';
const numbers= [1, 2, 3, 2, 1];
const fruits = ["apple", "banana", "orange", "lime"];

function Person(firstName, secondName, age) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
}

const john = new Person("John", "Peterson", 32);

const people = new Array(
  new Person("Peter", "Johnson", 25), 
  john,
  new Person("Samuel", "Jackson", 17),
  new Person("Jack", "Samuelson", 41)
);


// join
// console.log([1, 2, 3].join());
// console.log(fruits.join(", "));
// console.log(people.join("/"));

// indexOf
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(2, 2));
// console.log(fruits.indexOf("pineapple"));
// console.log(fruits.indexOf("lime"));
// console.log(people.indexOf(new Person("John", "Peterson", 32)));
// console.log(people.indexOf(john));

// forEach
function describe(element) {
  console.log(element);
}

// numbers.forEach(describe);
// people.forEach(describe);
// people.forEach(function (value) { console.log(value)});
// fruits.forEach((value, index) =>  { console.log(value)});
// numbers.forEach(e => console.log(Math.sqrt(e)));

// const fun = () => {};
// const square = x => x * x;
// // is equivalent to
// const square2 = (x) => { return x * x; };

// console.log(square(4));

// // sort
// console.log(numbers.sort());
// console.log(fruits.sort());
// console.log(people.sort());

// console.log(numbers.sort((a, b) => b - a));
// console.log(fruits.sort(function(a, b) {

// }));

function sortByFirstNameIncreasing(p1, p2) {
if (p1.firstName < p2.firstName) {return - 1;}
    else if (p1.firstName > p2.firstName) {return 1;}
    else {return 0;}
}
function sortByFirstNameDecreasing(p1, p2) {
if (p1.firstName < p2.firstName) {return 1;}
    else if (p1.firstName > p2.firstName) {return -1;}
    else {return 0;}
}

function sortByLastNameIncreasing(p1, p2) {
if (p1.secondName < p2.secondName) {return - 1;}
    else if (p1.secondName > p2.secondName) {return 1;}
    else {return 0;}
}

function sortByLastNameDecreasing(p1, p2) {
if (p1.secondName < p2.secondName) {return 1;}
    else if (p1.secondName > p2.secondName) {return -1;}
    else {return 0;}
}

function sortByAgeIncreasing(p1, p2) {
if (p1.age < p2.age) {return - 1;}
    else if (p1.age > p2.age) {return 1;}
    else {return 0;}
}
function sortByAgeDecreasing(p1, p2) {
if (p1.age < p2.age) {return 1;}
    else if (p1.age > p2.age) {return -1;}
    else {return 0;}
}

people.sort(sortByLastNameDecreasing); // 
people.forEach(describe); // sorted by last name decreasing

people.sort(sortByAgeIncreasing); // 
people.forEach(describe); // sorted by age increasing

people.sort(sortByFirstNameIncreasing); // 
people.forEach(describe); // sorted by first name increasing

people.sort(sortByFirstNameDecreasing); // 
people.forEach(describe); // sorted by first name decreasing


