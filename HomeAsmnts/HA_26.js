'use strict';
function makeArmy() {
    let i = 0;
    const shooters = [];
  

    do {
      let num = i;
      const shooter = function () {
        
        const randNum = Math.random();
        console.log(`I'm a shooter #${num}, my random number is: ${randNum}`);
      }

  
      shooters.push(shooter);
      i += 1;
    } while(i < 10);
  
    return shooters;
}

  
  const shooters = makeArmy();
  
  shooters[0]();
  shooters[4]();

  
  
