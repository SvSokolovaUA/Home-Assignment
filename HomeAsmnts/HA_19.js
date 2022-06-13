    'use strict'

        function getFirstTermFrom(str) {            // ПОЛУЧЕНИЕ ПЕРВОГО ЧИСЛА СТРОКИ СЧИТАЕТ ДО ПОЯВЛЕНИЯ ПЕРВОГО ЗНАКА ОПЕРАЦИИ
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

        function isOperation(s) {                   // ПРОВЕРЯЕТ ОПЕРАЦИЯ ИЛИ НЕТ
            return s == "+" || s == "-" || s == "*" || s == "/";
        }

        function getOperation(str) {                // ВОЗВРАЩАЕТ САМ ЗНАК ОПЕРАЦИИ (+, -, *, /)
            for (let i = 0; i < str.length; i += 1) {
                if (isOperation(str[i])) {
                    return str[i];
                }
            }
        }

        function getIndexOfOperation(str) {         // ВОЗВРАЩАЕТ ИНДЕКС, ПОД КОТОРЫМ В СТРОКЕ СТОИТ ОПЕРАЦИЯ
            for (let i = 0; i < str.length; i += 1) {
                if (isOperation(str[i])) {
                    return i;
                }
            }
            return -1;
        }
        
        // "1+2*3+13*2"; // 33
        function calculateSum(str) {                // СЧИТАЕТ СУММУ
            const indexOfOperation = getIndexOfSum(str);
            const firstTerm = getFirstTermSum(str);
            // if (indexOfOperation == -1) {
                if (indexOfOperation == str.length) {
                return firstTerm;
            }
            const secondTerm = calculateSum(str.substr(indexOfOperation + 1));
            return firstTerm + secondTerm;
        }

        // "2*3" => 1
        // "(2+3)*4" => 5
        // "(5+(2+3)*4)*2" => 11
        function getIndexOfMul(str) {               // ВОЗВРАЩАЕТ ИНДЕКС ПОД КОТОРЫМ ЗНАК УМНОЖЕНИЯ
        //     let brOpen = false;
        //     for (let i = 0; i < str.length; i+=1) {
        //         if (str[i] == "(") {
        //             brOpen = true;
        //         } else if (str[i] == ")") {
        //             brOpen = false;
        //         }
        //         if (!brOpen && str[i] == "*") {
        //             return i;
        //         }
        //     }
        // // return - 1;
        // return str.length;

        let br = 0;
        for (let i=0; i< str.length; i+=1) {
            if (str[i] == "(") {
                br +=1;
            } else if (str[i] == ")") {
                br -=1;
            }
            if (br == 0 && str[i] == "*") {
                return i;
            }
        }
        return str.length;
    }



        console.log(getIndexOfMul("2*3")); // 1
        console.log(getIndexOfMul("(2+3)*4")); // 5
        console.log(getIndexOfMul("(5+(2+3)*4)*2")); // 11
        
        // "23*5" => 23
        // "(17+2*3)*5" => 23 -- calls calculateSum
        function getFirstTermMul(str) {             // ВОЗВРАЩАЕТ ПЕРВЫЙ МНОЖИТЕЛЬ. В ПОСЛЕДНЕМ СЛУЧАЕ - РЕЗУЛЬТАТ ВЫЧИСЛЕНИЙ (17+2*3) = 23
            let indexOfMul = getIndexOfMul(str);
            let result;

            if (str[0] != "(") {
                result = Number(str.substr(0, indexOfMul));
                return result;

            } else if (str[0] == "(") {  
                result = calculateSum(str.substr(1, indexOfMul - 2)); 
                return result;
            } 
            return result;
        }
        console.log(getFirstTermMul("23*5")); // 23
        console.log(getFirstTermMul("(17+2*3)*5")); // 23


        // "3*5*2" => 30                            
        // "(1+2)*(2+3)*2" => 30
        function calculateMul(str) {                // ВОЗВРАЩАЕТ ПРОИЗВЕДЕНИЕ ОТ УМНОЖЕНИЯ ВСЕХ МНОЖИТЕЛЕЙ
            const firstTerm = getFirstTermMul(str);
            const index = getIndexOfMul(str);

            // if (index == -1) { return firstTerm; }
            if (index == str.length) {return firstTerm; }
            return firstTerm * calculateMul(str.substr(index + 1));
        }
        console.log(calculateMul("3*5*2")); // 30
        console.log(calculateMul("(1+2)*(2+3)*2")); //30

        // "2*3+4" => 3                             
        // "(2+3)*(4+5)+4" => 11
        // "((2+3)*2+3*5)+2" => 13
        function getIndexOfSum(str) {               // ВОЗВРАЩАЕТ ИНДЕКС ПОД КОТОРЫМ ЗНАК +
            //     let brOpen = false;
            // for (let i = 0; i < str.length; i += 1) {
            //     if (str[i] == "(") {
            //         brOpen = true;
            //     } else if (str[i] == ")") {
            //         brOpen = false;
            //     }
            //     if (!brOpen && str[i] == "+") {
            //         return i;
            //     }
            // }
            // // return - 1;
            // return str.length;

            let br = 0;
        for (let i=0; i< str.length; i+=1) {
            if (str[i] == "(") {
                br +=1;
            } else if (str[i] == ")") {
                br -=1;
            }
            if (br == 0 && str[i] == "+") {
                return i;
            }
        }
        return str.length;
        }
        console.log(getIndexOfSum("2*3+4")); // 3
        console.log(getIndexOfSum("(2+3)*(4+5)+4")); // 11
        console.log(getIndexOfSum("((2+3)*2+3*5)+2")); // 13

        // "2+3" => 2                               
        // "2*3+4" => 6
        // "(2+3)*(4+5)+4" => 45
        function getFirstTermSum(str) {             // ВОЗВРАЩАЕТ ПЕРВОЕ СЛАГАЕМОЕ: В ПОСЛЕДНЕМ СЛУЧАЕ -  РЕЗУЛЬТАТ ВЫЧИСЛЕНИЙ (2+3)*(4+5) = 45
            let strTillPlus = str.substr(0, getIndexOfSum(str));
            let haveOperation = false;
            for (let i = 0; i < strTillPlus.length; i+=1) {
                if (strTillPlus[i] == "*") {
                    haveOperation = true;
                }    
            }
            if (haveOperation) {
                return  calculateMul(strTillPlus);
            }   else  { return Number(strTillPlus);}
        }
        // console.log(getFirstTermSum("2+3")); // 2
        // console.log(getFirstTermSum("2*3+4")); // 6
        // console.log(getFirstTermSum("(2+3)*(4+5)+4")); // 45

        // let s = "1+2*3+13*2";
        // console.log(calculateSum(s)); // 33

        // s = "(1+2)*3+(2+6)*(3+8)"
        // console.log(calculateSum(s)); // 97