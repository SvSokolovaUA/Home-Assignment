<script>
    'use strict';

    let s = "21,4,7,*,+,9,-"
    // в функцию передаем любой индекс, она возвращает индекс следующей  запятой или длину строки
    // если дальше  запятых  нет
    function getNextTermIndex (str, i) {
      let k;
      i=i+1;
      for (; i < str.length; i+=1) {
        if (str[i] == ",") {
          k = i;
          return k;
        }  
      }
      return str.length;
    }

    console.log (getNextTermIndex(s, 0)) // 2
    console.log(getNextTermIndex(s, 2)) // 4
    console.log(getNextTermIndex(s, 4)) // 6
    console.log(getNextTermIndex(s, 12)) // 14

   
    function calculate2(str) {
      let stack = [];
      for (let i=0; i < str.length; i +=1) {

      }
    }

    console.log(calculate2(s)); // 40

</script>
  



       function calculate2(str) {
            let stack = [];
            let firstIndex = 0;
            let a;
            let b;
 
            for (let i = 0; i < str.length; i += 1) {
                if (str[i] == ",") {
                    if (str[i - 1] == "+") {
                        a = stack.pop();
                        b = stack.pop();
                        stack.push(a + b);
                    } else if (str[i - 1] == "*") {
                        a = stack.pop();
                        b = stack.pop();
                        stack.push(a * b);
                    } else if ()
                    
                    else {
                        stack.push(Number(str.substr(firstIndex, (str[i] - firstIndex))));
                    }
                    firstIndex = i+1;
                }
            }
            return stack.pop();
        }
                


        // // 
        //    for (; i < str.length;) {
        //         let content = str.substr(i, (getNextTermIndex(str, i) - i));

        //         if (content == "+" || content == "-" || content == "*") {
        //             copystr.push(content);
        //         } else {copystr.push(Number(content));}
        //        i = getNextTermIndex(str, i) + 1;  
        //     }


            for (; i < str.length; ) {


                if (isNaN(Number(content))) {
                    stack.push ((content));
                } else if ((content) == "+") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b + a);
                } else if ((content) == "*") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b * a);
                } else if ((content) == "-") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b - a);
                }
                i  = getNextTermIndex (str, i) + 1;
            }
            return stack.pop();
        }


        /* --------------------рабочий  код КАЛЬКУЛЯТОР ОБРАТНАЯ ПОЛЬСКАЯ ЗАПИСЬ
                function calculate2(str) {
            let stack = [];
            let a;
            let b;
            let i = 0;
            
            let copystr = [];

            for (; i < str.length;) {
                let content = str.substr(i, (getNextTermIndex(str, i) - i));

                if (content == "+" || content == "-" || content == "*") {
                    copystr.push(content);
                } else {copystr.push(Number(content));}
               i = getNextTermIndex(str, i) + 1;  
            }

            for (i=0; i < copystr.length; i+=1) {
                if (!(isNaN(copystr[i]))) {
                    stack.push (copystr[i]);
                } else if (copystr[i] == "+") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b + a);
                } else if (copystr[i] == "*") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b * a);
                } else if (copystr[i] == "-") {
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b - a);
                }
            }
            return stack.pop();
        }

        console.log(calculate2(s)); // 40
        */ -------------------------------------
            
/* -------------------- ОБРАТНАЯ ПОЛЬСКАЯ  ЗАПИСЬ ФОРМУЛ
s = "2,3,*,4,5,*,+"; // 2*3+4*5
console.log(calculate2(s)); // 26

s = "2,5,+,4,8,+,*,2,3,+,7,*,-"; // (2+5)*(4+8) - (2+3)*7
console.log(calculate2(s)); // 49

s = "2,3,4,-,*,3,1,2,5,+,-,*,+"; // 2*(3-4)+3*(1-(2+5))
console.log(calculate2(s)); // -20
*/----------------------