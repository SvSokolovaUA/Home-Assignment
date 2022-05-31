'use strict'

// ДЗ  1.
  let f = Number(prompt("Input first number"));
  let s = Number(prompt("Input second number"));
    function maximum(first, second) {
      let bigger;
          if (first > second) {
          bigger = first
          } else {
            bigger = second
          }
            return bigger;
        }
    console.log(maximum(f, s));
               
 // ДЗ  2.
  let f = Number(prompt("Input first number"));
        let s = Number(prompt("Input second number"));
        let t = Number(prompt("Input third number"));
function sumBiggest(first, second, third) {
  let sum;
  let firstBigger;
  let secondBigger

  if (((first > second)  ||  (first  >  third)) && ((second  > first) ||  (second  > third))) {
      firstBigger = first;
      secondBigger = second;
  } else if (((second  > first) ||  (second > third))  &&  ((third  >  first) ||  (third >  second))) {
      firstBigger = second;
      secondBigger = third;
    }
    else {firstBigger = first;
          secondBigger =  third;
    }
    sum = firstBigger +  secondBigger;
    return sum;
}
console.log(sumBiggest(f, s, t));  