// tower of hanoi
function move(source, destination) {
  console.log(`${source} -> ${destination}`);
}

function solveHanoi(number, source, destination, extra) {
  if (number <= 0) {
    return;
  }

  solveHanoi(number - 1, source, extra, destination);
  move(source, destination);
  solveHanoi(number - 1, extra, destination, source);
}

solveHanoi(4, "Source", "Destination", "Extra");

// --------------------------

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


// H.A. #1 add "/", "*"

// H.A. #2
function getIndexOfOperation(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (isOperation(str[i])) {
      return i;
    }
  }

  return -1;
}

console.log(getIndexOfOperation("123+4+6+9")) // 3
console.log(getIndexOfOperation("234125")) // -1

function calculate(str) {
  let result = 0;
  let indexOfOperation;
  do {
    indexOfOperation = getIndexOfOperation(str);
    result += getFirstTermFrom(str);

    if (indexOfOperation >= 0) {
      str = str.substr(indexOfOperation + 1)
    }

  } while (indexOfOperation >= 0);

  return result;
}

// H.A. #3
s = "1+2+13";

console.log(calculate(s))// 16

//// --------

function calculate(str) {
  const indexOfOperation = getIndexOfOperation(str);

  if (indexOfOperation == -1) {
    return getFirstTermFrom(str);
  }

  return getFirstTermFrom(str) + calculate(str.substr(indexOfOperation + 1));
}

/// ----

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


// H.A. #1 add "/", "*"

// H.A. #2
function getIndexOfOperation(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (isOperation(str[i])) {
      return i;
    }
  }

  return -1;
}

function calculate(str, sign = 1) {
  const indexOfOperation = getIndexOfOperation(str);

  const firstValue = sign * getFirstTermFrom(str);

  if (indexOfOperation == -1) {
    return firstValue;
  }

  if (getOperation(str) == "-") {
    sign = -1;
  } else {
    sign = 1;
  }

  return firstValue
    + calculate(str.substr(indexOfOperation + 1), sign);
}

// H.A. #3
s = "1+2-13+14-7";

console.log(calculate(s))// -3

    // const input = prompt("Input calculations");
    // const result = calculate(input);
    // alert("result: " + result);
