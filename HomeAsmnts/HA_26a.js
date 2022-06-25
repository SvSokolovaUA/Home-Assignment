'use strict';
function makeCountDown (a) {
    let result = a + 1;

    return {
      counter: function() {
        result -= 1;
        if (result >=0) {return result;}
        return 0;
      },

      reset: function() {
        result =  a + 1;
      }
    
    }
}  
  let c1 = makeCountDown(3);

  console.log(c1.counter()); // 3
  console.log(c1.counter()); // 2
  console.log(c1.counter()); // 1
  console.log(c1.counter()); // 0
  c1.reset();
  console.log(c1.counter()); // 3
  console.log(c1.counter()); // 2