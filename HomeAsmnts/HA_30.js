'use strict';

const numbers = [1, 2, 3, 2, 1];
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

// this is a different jack than we store in people
const jack = new Person("Jack", "Samuelson", 41);

// H.A. add second argument from documentation
// The includes() method determines whether an array includes 
// a certain value among its entries, returning true or false as appropriate. 
function myIncludes(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i += 1) {
    if (array[i] == value) return true;
  }
  return false;
}

function myFindIndex(array, predicate) {
  for(let i = 0; i < array.length; i += 1) {
    if (predicate(array[i])) return i;
  }
  return -1;
}

// H.A. 
function myForEach(array, fun) {
    for (let i=0; i< i.length; i+=1) {
        fun(array[i]);
       }
}

// H.A. 
// The every() method tests whether all elements in the array pass 
// the test implemented by the provided function. It returns a Boolean value. 
function myEvery(array, predicate) {
for (let i = 0; i < array.length; i+=1) {
    if (!predicate(array[i])) {return false;}
}
return true;
}

// H.A. 
// The some() method tests whether at least one element in the array passes the test 
// implemented by the provided function. It returns true if, in the array, it finds an element 
// for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 
function mySome(array, predicate) {
for (let i = 0; i < array.length; i+=1) {
    if (predicate(array[i])) {return true;}
}
return false;
}

// H.A. 
// The filter() method creates a new array with all elements that pass 
// the test implemented by the provided function.
function myFilter(array, predicate) {
let newArray = [];
for (let i=0; i<array.length; i+=1){
    if (predicate(array[i])) { newArray.push(array[i]);}
}
return newArray;
}

// console.log(numbers.includes(2)); // true
// console.log(numbers.includes(5)); // false
// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("Banana")); // false
// console.log(people.includes(john)); // true
// console.log(people.includes(jack)); // false
// console.log(people.includes(new Person("Samuel", "Jackson", 17))); // false
// console.log(myIncludes(people, john)); // true
console.log(myIncludes(numbers, 3, 1)); // true

// console.log(numbers.findIndex(n => n > 2)); // 2
// console.log(numbers.findIndex(n => n == 2)); // 1

// console.log(fruits.findIndex(f => f.length == 4)); // 3
// console.log(people.findIndex(p => p.age < 20)); // 2
// console.log(myFindIndex(people, p => p.age < 20)) // 2
// console.log(myForEach(people, p => console.log(p))) // list of people

// console.log(numbers.every(n => n > 1)); // false
// console.log(numbers.every(n => n >= 1)); // true
// console.log(fruits.every(f => f.includes("a"))); // false
// console.log(people.every(p => p.age >= 18)); // false
console.log(myEvery(people, p => p.age >= 18)); // false

// console.log(numbers.some(n => n % 3 == 0)); // true
// console.log(numbers.some(n => n % 4 == 0)); // false
// console.log(fruits.some(f => f.includes("a"))); // true
// console.log(people.some(p => p.firstName.length == 4)); // true
console.log(mySome(people, p => p.firstName.length == 4)); // true

const fruitsWithA = fruits.filter(f => f.includes("a"));
// console.log(fruitsWithA); 
// console.log(fruits.filter(f => f.includes("i"))); 
// console.log(fruits.filter(f => f.includes("w"))); 
// console.log(people.filter(p => p.age >= 18)); 
console.log(myFilter(people, p => p.age >= 18)); 

// console.log(fruits
//   .filter(f => f.includes("a") && f.includes("b"))
//   .findIndex(f => f.includes("b")));