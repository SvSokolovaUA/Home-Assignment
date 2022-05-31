'use strict'

// Home assignment

//  ----------------------  homework 1
  let b = [];
  let j = 5;
    while (j > 0) {
      let elem = Number(prompt("Input next element:"));
      b.push(elem);
      j = j - 1;
    }

function minimum(arr) {
  let  min = arr[0];
  let  i = 0;

  while (i <  arr.length) {
    let  currentElement = arr[i];
                
      if (min > currentElement) {
          min = currentElement;
      }
      i = i + 1;
  }
    return min;
} // minimum
console.log(minimum(b));

// ---------------------  homework 2
  let b = [];
  let j = 5;
  while (j > 0) {
    let elem = Number(prompt("Input next element:"));
    b.push(elem);
    j = j - 1;
  }

  function maximum(arr) {
    let  max = arr[0];
    let  i = 0;

    while (i <  arr.length) {
      let  currentElement = arr[i];
                
      if (max < currentElement) {
          max = currentElement;
      }
      i = i + 1;
    }
    return max;
  } // maximum
console.log(maximum(b));

// -------------- homework  3

  let b = [];
  let j = 5;
  while (j > 0) {
    let elem = Number(prompt("Input next element:"));
      b.push(elem);
      j = j - 1;
  }

  function sum(arr) {
    let  s = 0;
    let  i = 0;
            
    while (i <  arr.length) {
      let nextElem = arr [i];
      s = (s + nextElem);
      i = i + 1;
    }
  return s;
  } // sum
console.log(sum(b));

//--------------  homework4
  let b = [];
  let j = 5;
  while (j > 0) {
    let elem = Number(prompt("Input next element:"));
    b.push(elem);
    j = j - 1;
  }

  function average(arr) {
    let  a;
    let  s = 0;
    let  i = 0;
            
    while (i <  arr.length) {
      let nextElem = arr [i];
      s = (s + nextElem);
      i = i + 1;
    }
            
  a = (s / arr.length);

  return a;
  } // avarage
console.log(average(b));

        
        
        
        


