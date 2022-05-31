'use strict'
   
let name = prompt ("What  is your sex?");
           if  (name == "female") { 
               alert ("Hello, miss");
            } else if (name == "male") { 
               alert ("Hello, mister");
            } else if (name  ==  "it")  {
               alert  ("Hello,  thing!");
            } else { 
    alert("Unsupported  value");
               
  let  t =  true;
      if  (t) alert  ('hi');
              
  let  a  =  (2+3)/4;
  let  b  =  a+8;
  console.log  (a,b);
  a=5;
  console.log (a,  b);
               
  let a = (2 + 3) / 4;
  let b = a + 8;
  console.log(a, b);
  a = 5;
  console.log(a, b);
  if (a>b) console.log ('greater');
  
  /*
              Math operators: (result is a number)
              + - * / 
              
              Logical operators: (result is a boolean)
              < <= > >= == !=
    
              String operator:
              + (concatenation)
          */
       
        let a = prompt  ('input first number');
        let b = prompt  ('input second number');
      if  (a>b) {
          alert  ("first is bigger");
      }
      else  if  (b>a)  {
          alert  ('second is bigger');
       }
      else if  (b=a) {
          alert ("they are equal");
       }
        </script>
               
/*
    let a = Number (prompt  ('input first number'));
    let b = prompt  ('input second number');
    b = Number(b);
преобразовать в число  -  выше 2  эквивалентных  способа
*/
 /*
    let a = Number (prompt  ('input first number'));
    let b = prompt  ('input second number');
    b  = Number (b);
      if  (a>b) {
        alert  ("first is bigger");
      }
      else  if  (b>a)  {
        alert  ('second is bigger');
       }
      else {
        alert ("they are equal");
    }
*/
/*function greeter (name)  {
return "Hello, " + name;
}
создали  функцию, но не  вызвали
*/
               
/*alert (greeter("Alex"));
// вызвали  функцию,  то что функция возвращает  вызывается, круглые  скобки  важны
*/
/*              
function greeter (name)  {
return "Hello, " + name;
}
alert(greeter(prompt("What is your name?")));
*/
               
 /*    <script>
        function greeter (name, sex)  {
            let prefix;
        if (sex=="male") {   
            prefix  =  "Mr.";
        } else  {
            prefix = "Mrs.";   
        }     
           let  greeting  =  "Hello, " + prefix  +  "  "  + name;
            return greeting;
        }
        let n  = prompt  ("What is your name?");
        let s = prompt  ("What is your sex?");
        alert (greeter(n, s));    
    </script>
    */
              
/*
 function greeter(name, sex) {
        let prefix;
 
        if (sex == "male") {
          prefix = "Mr.";
        } else if (sex == "female") {
          prefix = "Ms.";
        } else {
          prefix = "";
        }
 
        let greeting = "Hello, " + prefix + " " + name;
        return greeting;
      }
 
      let n = prompt("What is your name");
      let s = prompt("What is your sex"); 
      alert(greeter(n, s));
*/
               
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