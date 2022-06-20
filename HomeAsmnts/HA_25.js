function makeCounter() {
    let a = 0;
  
    return function() {
      a += 1;
      return a;
    }
  }
  
  
  let a = makeCounter(5);
  
//   console.log(a()); // 5
//   console.log(a()); // 6
//   console.log(a()); // 7
  
  let b = makeCounter(12);
  
//   console.log(b()); // 12
//   console.log(b()); // 13
//   console.log(a()); // 8
  
// H.A. 1 

  function makeCountDown (a) {
    let result = a + 1;
    return function() {
        result -= 1;
        if (result >=0) {return result;}
        return 0;
    }
  }
  
  let c1 = makeCountDown(3);
  // console.log(c1()); // 3
  // console.log(c1()); // 2
  // console.log(c1()); // 1
  // console.log(c1()); // 0
  // console.log(c1()); // 0
  // console.log(c1()); // 0
  
// H.A. 2
  
  function makeArithmeticProgression (a, b) {
    let result = a - b;
    return function () {
        result +=b;
        return result;
    }
  }

  let p1 = makeArithmeticProgression(6, 2);
  // console.log(p1()); // 6
  // console.log(p1()); // 8
  // console.log(p1()); // 10
  
// H.A. 3

function makeSequence (a) {
    let result;
    let count = 1;

    return function () {
      
        result = Math.pow(a, count)/getFactorial(count);
        count+=1;
        return result;
    }

    function getFactorial (n) {
      let result = 1;
      for (let i = 1; i <=n; i+= 1) {
        result = result * i;
      }
      return result;
    }
}




  let s1 = makeSequence(3); // (3^n)/n!
  console.log(s1()); // 3
  console.log(s1()); // 3^2/2 = 4.5
  console.log(s1()); // 3^3/3!