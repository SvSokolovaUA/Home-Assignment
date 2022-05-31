function isInInterval(a, x) {
      return (x < a) && (x > -a);
    } // bool: true or false
    
    function isInSquare(a, x, y) {
        return  ((x > -a) && (x < a))
             && ((y > -a) && (y < a));
    } // bool: true or false
    
    function isInRectangle(a, b, x, y) {
      return ((x > -a) && (x < a))
          && ((y > -b) && (y < b));
    } // bool: true or false
    
    let a = 3;
    let b = 5;
    let x = 2;
    let y = 3;
    if (isInRectangle(a, b, x, y)) {
      console.log("Inside" );
    } else {
      console.log("Outside");
    }
 
 
    function isInInterval(a, x) {
      return (x < a) && (x > -a);
    } // bool: true or false
    
    function isInSquare(a, x, y) {
        return  ((x > -a) && (x < a))
             && ((y > -a) && (y < a));
    } // bool: true or false
    
    function isInRectangle(a, b, x, y) {
      return ((x > -a) && (x < a))
          && ((y > -b) && (y < b));
    } // bool: true or false
    
    function inputNumber(text) {
      let number;
      
      do {
        number = Number(prompt(text));
 
        if (isNaN(number)) {
          alert("It is supposed to be a number. Repeat please:");
        }
 
      } while(isNaN(number));
 
      return number;
    }
 
    let i = 0;
    do {
      console.log(i);
      i = i + 1;
    } while (i < 10);
    
    console.log("after do ... while i is ", i);
 
    while(i > 9) {
      console.log(i);
      i = i - 1;
    }
 
 
    let a = inputNumber("Input the width of a rectangle");
    let b = inputNumber("Input the height of a rectangle");
    let x = inputNumber("Input x coordinate of a point");
    let y = inputNumber("Input y coordinate of a point");
    if (isInRectangle(a, b, x, y)) {
      console.log("Inside" );
    } else {
      console.log("Outside");
    }
    console.log(a, b);
 
    // ---
 
    let ar = [1, 5, true, "hi"];
 
    let i = 0;
    
    ar[4] = "New element";
    ar.push(true);
    ar.push(7);
 
    while (i < ar.length) {
      console.log(i, ar[i]);
      i = i + 1;
    }
 
 