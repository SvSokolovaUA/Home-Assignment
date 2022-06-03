'use strict'

function getFizzBuzz(n) {
    let result  = "";
    if (n % 3 == 0 && n % 5 != 0) {
        return "Fizz";
    } else if (n % 5 == 0 &&  n % 3 !=0) {
        return "Buzz";
    } else if (n % 5 == 0 && n % 3 == 0) {
        return "FizzBuzz";
    } else if (n % 3 != 0 || n % 5 != 0) {
        result += n;
        return result;
   }
}

let result = "";
for (let i = 1; i <= 30; i += 1) {
    result = result + i + ' - ' + getFizzBuzz(i) + ", ";
}
console.log(result);
