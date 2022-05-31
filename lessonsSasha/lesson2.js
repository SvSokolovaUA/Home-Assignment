
       <script>
           
           let  something;
           something  =  "Some string";

           let  otherName  = "John";

           something =  "Other thing"
           alert(something);
        </script>

//способы создать переменную

   let name = prompt('what is your name?') 
          alert(name)

// show  on monitor info

let name = prompt('what is your name?'); 
alert("Hello,  " + name);

let name = prompt('what is your name?'); 
alert("Hello,  " + name  + ". Nice  to  meet  you!");

if  (true) alert ("Hi")  - будет выводится
if (false) alert ("Hi") - не  будет

if (2<3) alert (2<3);  выведется  true


let expression = 2<3;
if (expression) alert (expression);


    let expression = 2>3;
if (expression) { 
    alert (expression);
    } else {
    alert ("it  was  false");
}
        

let name = prompt ("What  is your sex?");
if (name == "male") {
    alert("Hello, mister");
} else {
    alert("Hello, miss");
}
