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
 
// let max = maximum(x, y); 
    
console.log("The sum of maximum is", sumBiggest(x, y, z));

      function isInInterval(a, x) {
        if  ((x  <  a)  &&  (x  > -a)) {
        return true;
        }  else { return  false;
        }
        isInInterval (b, y);
    }

// bool: true or false

        let b = 5;
        let y = -3;
        if (isInInterval(b, y)) {
            console.log(y + " is in interval (" + (-b) + ", " + b + ")");
        }
    