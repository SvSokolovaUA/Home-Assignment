'use strict';

    function getFirstTermFrom(str) {
        let strResult = "";
        for (let i = 0; i < str.length; i += 1) {
            if (!isOperation(str[i])) {
                strResult += str[i]
            } else {
                return Number(strResult);
            }
        }
        return Number(strResult);
    }

    function getSecondTermFrom(str) {
        let result = "";
        let i = 0;
        for (i = 0; i < str.length; i += 1) {
            if (isOperation(str[i])) {
                break;
            }
        }
        for (i = i + 1; i < str.length; i += 1) {
            result += str[i];
        }
        return Number(result);
    }

    function isOperation(s) {
        return s == "+" || s == "-" || s == "*" || s == "/";
    }

    function getOperation(str) {
        for (let i = 0; i < str.length; i += 1) {
            if (isOperation(str[i])) {
                return str[i];
            }
        }
    }

    let s = "213+14";

    let firstTerm = getFirstTermFrom(s); // 213
    console.log(firstTerm); // 213

    let secondTerm = getSecondTermFrom(s);
    console.log(secondTerm); // 14

    let operation = getOperation(s);
    console.log(operation); // "+"

    s = "21332-14";
    console.log(getOperation(s)); // "-"
    s = "213*14";
    console.log(getOperation(s)); // "*"
    s = "213/14";
    console.log(getOperation(s)); // "/"

    // H.A. #1 add "/", "*"

    // H.A. #2
    function getIndexOfOperation(str) {
        let operIndex = -1;
        for (let i=0; i < str.length; i+=1) {
            if (isOperation(str[i])) {
                operIndex = i;
            }
        }
        return operIndex;
    }
    console.log(getIndexOfOperation("123+4")) // 3
    console.log(getIndexOfOperation("234125")) // -1

    console.log(s);
    console.log(s.substr(3));
    console.log(s.substr(3, 2));

    function calculate(str) {
        const operation = getOperation(str);
        if (operation == "+") {
            return getFirstTermFrom(str) + getSecondTermFrom(str);
        } else if (operation == "-") {
            return getFirstTermFrom(str) - getSecondTermFrom(str);
         } else if (operation == "*") {
             return getFirstTermFrom(str) * getSecondTermFrom(str);
         } else if (operation == "/") {
             return getFirstTermFrom(str) / getSecondTermFrom(str);
         }

         let sum;
             for (let i=0; i < str.length; ) {
                if (getIndexOfOperation (str) != -1) {
                    sum = getFirstTermFrom (str) + calculate (str.substr(getIndexOfOperation+1));
                     str = str.substr(getIndexOfOperation+1);
                    i = getIndexOfOperation + 1;
                } else { 
                     sum = sum + Number(str.substr(getIndexOfOperation + 1))
                   }
                
                 return sum;
             }
    }

    // H.A. #3
    s = "1+2+13";
    console.log(calculate(s))// 16

    const input = prompt("Input calculations");
    const result = calculate(input);
    alert("result: " + result);
