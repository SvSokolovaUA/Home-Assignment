function maximum(a, b) {
  if (a > b) {
    return a;
    console.log("something");
  } else {
    return b;
    console.log("something");
  }
  console.log("something");
 
}
 
function
 
function sumBiggest(a, b, c) {
  let first;
  let second;
 
  if (a > b) {
    first = a;
    second = b;
  } else {
    first = b;
    second = a;
  }
 
  if (c > first) {
    second = first;
    first = c;
  } else if (c > second) {
    second = c;
  }
 
  return first + second;
}
 
let x = Number(prompt("Input first value"));
let y = Number(prompt("input second value"));
let z = Number(prompt("input third value"));
 
 
function maxOfThree(a, b, c) {
  
  return maximum(maximum(a, b), c);
}
 
// let max = maximum(x, y); 
    
console.log("The sum of maximum is", sumBiggest(x, y, z));
 
 
// -------------------------
    let a = 1;
    let t = true;
    let x = "hello";
    {
      let a = 5;
      console.log("first log", a, t);
      {
        let a = "Hi";
        let t = 15;
        console.log("second log", a, t, x);
 
      }
      console.log("after second log", a, t);
    }
    console.log("third log", a, t);
 
    // ----------
    function firstFunction(a) {
      a = a + 1;
      console.log("inside the first function scope", a);
    }
 
    function secondFunction() {
      a = a + 1;
      console.log("inside the second function scope", a);
    }
 
    let a = 1;
    let t = true;
    let x = "hello";
 
    firstFunction(a);
    console.log("in the global after first", a);
    secondFunction();
    console.log("in the global after second", a);
 
    -----
 
    function isInInterval(a, x) {
      return (x < a) && (x > -a);
    } // bool: true or false
    
    function isInSquare(a, x, y) {
    } // bool: true or false
    
    function isInRectangle(a, b, x, y) {
    } // bool: true or false
    
    let b = 5;
    let y = -7;
    if (isInInterval(b, y)) {
      console.log(y + " is in interval (" + (-b) + ", " + b + ")" );
    } else {
      console.log("Not in interval");
    }