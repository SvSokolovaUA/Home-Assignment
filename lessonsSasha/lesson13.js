function getFirstTermFrom(str) {
  let strResult = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != "+") {
      strResult += str[i]
    } else {
      return Number(strResult);
    }
  }

  return Number(strResult);
}

function getSecondTerm(str) {

}

function getOperation(str) {

}

let s = "213+14";

let firstTerm = getFirstTermFrom(s); // 213
console.log(firstTerm); // 213

// H.A. #1
let secondTerm = getSecondTerm(s);
console.log(secondTerm); // 14
// H.S. #2
let getOperation = getOperation(s);
console.log(getOperation); // "+"

// H.A. #3
s = "213-14";
console.log(getOperation(s)); // "-"
s = "213*14";
console.log(getOperation(s)); // "*"
s = "213/14";
console.log(getOperation(s)); // "/"

// H.A. #4
// Fibonacci without recursion

function calculate(str) {

  return 0;
}

const input = prompt("Input calculations");
const result = calculate(input);
alert("result: " + result);
