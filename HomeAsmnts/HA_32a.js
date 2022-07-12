'use strict'
// H.A. # 1: Implement MyReduce(arr, func);

const numbers = [1, 2, 3, 2, 1];

function MyReduce(arr, func) {
    let i = 0;
    let result = arr[i];
   
    for (i+=1; i<arr.length; i+=1) {
        let c = arr[i];
    result = func (result, c);
    }

return result;
}

console.log(numbers.reduce((p, c) => p < c ? p : c, Number.POSITIVE_INFINITY)); // minimum 1
console.log(MyReduce(numbers, (p, c) => p < c ? p : c, Number.POSITIVE_INFINITY)); // minimum 1


console.log(numbers.reduce((prev, cur) => prev + cur, 0)); // 9
console.log(MyReduce(numbers, (prev, cur) => prev + cur)); // 9