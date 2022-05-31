    function Fibonacci1(n) {
      if (n < 2) return n;

      return Fibonacci1(n - 1) + Fibonacci1(n - 2);
    }

    function factorial(n) {
      if (n < 2) return 1;
      return n * factorial(n - 1);
    }
    
    function Fibonacci2(n) {
      const ar = [0, 1];

      for (let i = 2; i <= n; i += 1) {
        ar[i] = ar[i-1] + ar[i-2];
      }

      return ar[n];
    }

    function Fibonacci3(n) {
      let num1 = 0;
      let num2 = 1;
      let num3;

      if (n < 2) return n;

      for (let i = 2; i <= n; i += 1) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
      }

      return num3;
    }


    // -----------------------

for (let i = 0; true; i += 1) {
  console.log(i);

  if (i > 7) { break; }

  console.log("Hi");
}

// -------------------------

function getFirstTermFrom(str) {
  let strResult = "";
  for (let i = 0; i < str.length; i += 1) {
    if (!isOperation(str[i])) {
      strResult += str[i]
    } else {
      return Number(strResult);
    }
  }

  return Number(strResult);
}

function getSecondTermFrom(str) {
  let result = "";
  let i = 0;

  // while(str[i] != "+") {
  //   i += 1;
  // }

  // for(i = 0; str[i] != "+"; i += 1);

  for (i = 0; i < str.length; i += 1) {
    if (isOperation(str[i])) {
      break;
    }
  }

  for (i = i + 1; i < str.length; i += 1) {
    result += str[i];
  }

  return Number(result);
}


function isOperation(s) {
  return s == "+" || s == "-" || s == "*" || s == "/";
}

function getOperation(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (isOperation(str[i])) {
      return str[i];
    }
  }

}

let s = "213+14";

let firstTerm = getFirstTermFrom(s); // 213
console.log(firstTerm); // 213


let secondTerm = getSecondTermFrom(s);
console.log(secondTerm); // 14

let operation = getOperation(s);
console.log(operation); // "+"


s = "21332-14";
console.log(getOperation(s)); // "-"
s = "213*14";
console.log(getOperation(s)); // "*"
s = "213/14";
console.log(getOperation(s)); // "/"


// H.A. #1 add "/", "*"

// H.A. #2
function getIndexOfOperation(str) {
  // ...
}
console.log(getIndexOfOperation("123+4")) // 3
console.log(getIndexOfOperation("234125")) // -1



console.log(s);
console.log(s.substr(3));
console.log(s.substr(3, 2));

function calculate(str) {
  const operation = getOperation(str);
  if (operation == "+") {
    return getFirstTermFrom(str) + getSecondTermFrom(str);
  } else if (operation == "-") {
    return getFirstTermFrom(str) - getSecondTermFrom(str);
  }
}

// H.A. #3
s = "1+2+13";

console.log(calculate(s))// 16

const input = prompt("Input calculations");
const result = calculate(input);
alert("result: " + result);

