'use strict'
function calculate(str) {
        let value = getFirstTermFrom (str);
        let next = getIndexOfOperation (str) + 1;

        for  (; ; ) {
            if (getOperation(str) == "+") {
                value  =  value + getFirstTermFrom (str.substr(next));

            } else if (getOperation(str) == "-") {
                    value = value - getFirstTermFrom (str.substr(next));
              } 
              str = str.substr(next);
              next = getIndexOfOperation (str) + 1;
            if (getIndexOfOperation(str) == -1) {
                  break;
            }
        }
        
        return value;
    }

    // H.A. #3
    s = "1+2-13+14-7";

    console.log(calculate(s))// -3
   
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

    // H.A. #1 add "/", "*"

    // H.A. #2
    function getIndexOfOperation(str) {
        for (let i = 0; i < str.length; i += 1) {
            if (isOperation(str[i])) {
                return i;
            }
        }

        return -1;
    }

    // console.log(getIndexOfOperation("123+4+6+9")) // 3
    // console.log(getIndexOfOperation("234125")) // -1

    function calculate (str) {
        let value = getFirstTermFrom (str);
        let next = getIndexOfOperation (str) + 1;

        for  (; ; ) {
            if (getOperation(str) == "+") {
                value  =  value + getFirstTermFrom (str.substr(next));

            } else if (getOperation(str) == "-") {
                    value = value - getFirstTermFrom (str.substr(next));
              } 
              str = str.substr(next);
              next = getIndexOfOperation (str) + 1;
            if (getIndexOfOperation(str) == -1) {
                  break;
            }
        }
        
        return value;
    }

    // H.A. #3
    s = "1+2-13+14-7";

    console.log(calculate(s))// -3

    // const input = prompt("Input calculations");
    // const result = calculate(input);
    // alert("result: " + result);
