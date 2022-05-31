function minimum(arr) {
  let min = arr[0];
  let j = 0;
  while (j < arr.length) {
    if (min > arr[j]) {
      min = arr[j];
    }
    j += 1;
  }

  return min;
} // minimum


function filter(arr, threshold) {
  let b = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > threshold) {
      b.push(arr[i]);
    }
  }

  return b;
} // return a copy of a with elements which are > threshold

function copyArray(arr) {
  let c = [];
  for (let i = 0; i < arr.length; i += 1) {
    c[i] = arr[i];
  }
  return c;
}

function sortCopy(arr) {
  let result = [];

  let c = copyArray(arr);

  for (let i = 0; i < arr.length; i += 1) {
    let min = minimum(c);
    result.push(min);

    c = filter(c, min);
  }
  return result;
}

let a = [3, 5, 1, -8, 12, 0];
let b = sortCopy(a);

console.log(a) // 3, 5, 1, -8, 12, 0
console.log(b) // -8, 0, 1, 3, 5, 12


// --------

    function factorial(n) {
      if (n == 0) return 1;

      let result = n * factorial(n - 1);
      return result;
    }

    function factorial_cycle(n) {
      
      let result = 1;
      for (let i = 1; i <=n; i+= 1) {
        result = result * i;
      }

      return result;
    } 

    function countDown(n) {
      console.log(n);

      if (n > 0) countDown(n-1);
    }

    // console.log(factorial(3));
    // console.log(factorial_cycle(3));
    
    countDown(4);

