for (let i = 0; i < 10; i += 1) {
  console.log(i);
  if (i % 2 == 0) {
    continue;
  }
  console.log("the rest of the cicle");
}


// --------------------

'use strict'
let s = "21,4,7,*,+,9,-";
function getNextCommaIndex(str, i) {
  for (i = i + 1; i < str.length; i += 1) {
    if (str[i] == ',') {
      return i;
    }
  }

  return str.length;
}

function calculate2(str) {
  let stack = [];

  let lastIndex;
  for (let firstIndex = 0; firstIndex < str.length; firstIndex = lastIndex + 1) {
    lastIndex = getNextCommaIndex(str, firstIndex);
    const term = str.substr(firstIndex, lastIndex - firstIndex);
    const number = Number(term);

    if (!isNaN(number)) {
      stack.push(number);
      continue;
    }

    let a = stack.pop();
    let b = stack.pop();

    switch (term) {
      case "+":
        stack.push(b + a);
        break;
      case "-":
        stack.push(b - a);
        break;
      case "*":
        stack.push(b * a);
        break;
      case "/":
        stack.push(b / a);
        break;
      default:
        return "Error in input";
    }

    // the same as above
    // if (term == "+") {
    //   stack.push(b + a);
    // } else if (term == "-") {
    //   stack.push(b - a);
    // } else if (term == "*") {
    //   stack.push(b * a);
    // } else if ('/' == term) {
    //   stack.push(b / a);
    // } else {
    //   return "Error in input";
    // }


  }

  return stack.pop();
}



console.log(calculate2("2,3,+")); // 5
console.log(calculate2(s)); // 40
