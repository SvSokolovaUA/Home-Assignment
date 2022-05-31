// ДЗ  ЧАСТИ КАЛЬКУЛЯТОРА

    'use strict';

    function getFirstTermFrom(str) {
            let strResult = "";
            for (let i=0; i<str.length; i+=1) {
                if (str[i] != "+") {
                    strResult += str[i]
                } else {
                    return Number(strResult);
                }
            }
            return Number(strResult);
        }

        function getOperation(str) {
            let oper;
            for (let i=0; i<str.length; i+=1)
            if (str[i]=="+"||
                str[i]=="-"||
                str[i]=="*"||
                str[i]=="/") {
                    oper = str[i];
                }
                return oper;
        }
    
        function getSecondTerm(str) {
            let result="";
            for (let i=0; i<str.length; i+=1) {
                if (str[i]=="+") {
                    // for (; i<str.length-1; i+=1) {
                    //     result+=str[i+1];
                    // }
                    for (i = i + 1; i < str.length; i += 1) { result += str[i]; }

                    return Number(result);
                }
            }
        }

        let s = "213+14";

        let firstTerm = getFirstTermFrom(s); // 213
        console.log(firstTerm); // 213

        // H.A. #1
        let secondTerm = getSecondTerm(s);
        console.log(secondTerm); // 14
        // H.S. #2
        let Operation = getOperation(s);
        console.log(getOperation); // "+"

        // H.A. #3
        s = "213-14";
        console.log(getOperation(s)); // "-"
        s = "213*14";
        console.log(getOperation(s)); // "*"
        s = "213/14";
        console.log(getOperation(s)); // "/"

        // H.A. #4
        // Fibonacci without recursion
        function fibonacci(n) {

        let row = [0, 1];

        for (let i=2; i<=n && n>=2; i+=1){
           
                row.push (row[i-1] + row[i-2]);
        }
        return row[n];
        }
        console.log(fibonacci(9));

        function calculate(str) {
            return 0;
        }

        const input = prompt("Input calculations");
        const result = calculate(input);
        alert("result: " + result);





