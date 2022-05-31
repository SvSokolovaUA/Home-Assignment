'use strict'

//---- Homework 1.
 
    function isInSquare(a, x, y) {
    return (((x  <  a)  &&  (x  > -a)) && ((y < a) && (y > -a)));         
    } // bool: true or false

        let b = 5;
        let c = -3;
        let d = 2;
    if (isInSquare(b, c, d)) {
        console.log("the dot is in square");
    }

        
//----Homework  2.

function isInRectangle(a, b, x, y) {
  return (((x  <  a)  &&  (x  > -a)) && ((y < b) && (y > -b)));         
} // bool: true or false
  let l = 5;
  let m = 7;
  let n = -3;
  let o = 6;
  if (isInRectangle(l, m, n,  o)) {
    console.log("the dot is in rectangle");
  }
