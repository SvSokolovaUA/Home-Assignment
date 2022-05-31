  'use strict';
    let s;
    
    function getFirstTermFrom(str) {          // ПОЛУЧЕНИЕ ПЕРВОГО ЧИСЛА СТРОКИ СЧИТАЕТ ДО ПОЯВЛЕНИЯ ПЕРВОГО ЗНАКА ОПЕРАЦИИ
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

    function isOperation(s) {                 // ПРОВЕРЯЕТ ОПЕРАЦИЯ ИЛИ НЕТ
      return s == "+" || s == "-" || s == "*" || s == "/";
    }

    function getOperation(str) {              // ВОЗВРАЩАЕТ САМ ЗНАК ОПЕРАЦИИ (+-*/)
      for (let i = 0; i < str.length; i += 1) {
        if (isOperation(str[i])) {
          return str[i];
        }
      }
    }

    function getIndexOfOperation(str) {       // ВОЗВРАЩАЕТ ИНДЕКС, ПОД КОТОРЫМ СТОИТ ОПЕРАЦИЯ
      for (let i = 0; i < str.length; i += 1) {
        if (isOperation(str[i])) {
          return i;
        }
      }
      return -1;
    }

    s = "1+2*3+13*2";

    function calculateSum(str) {            // СЧИТАЕТ СУММУ
      const indexOfOperation = getIndexOfSum(str);
      const firstTerm = getFirstTermSum(str);
      if (indexOfOperation == -1) {
        return firstTerm;
      }
      const secondTerm = calculateSum(str.substr(indexOfOperation + 1));
      return firstTerm + secondTerm;
    }

    // "2*3" => 1
    function getIndexOfMul(str) {         // ВОЗВРАЩАЕТ ИНДЕКС ПОД КОТОРЫМ ЗНАК УМНОЖЕНИЯ
        for (let i = 0; i < str.length; i += 1) {
          if (str[i] == "*") {
          return i;
          } 
        }
        return -1;
    }
    console.log (getIndexOfMul("2*3"));

    // "23*5" => 23
    function getFirstTermMul(str) {       // ВОЗВРАЩАЕТ ПЕРВЫЙ МНОЖИТЕЛЬ
      let result = "";
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] != "*") {
          result += str [i];
        }  else {
        return Number (result);
        }
      }
      return Number (result);
    }
    console.log (getFirstTermMul("23*5"));

    // "3*5*2" => 30                  // ВОЗВРАЩАЕТ ПРОИЗВЕДЕНИЕ ОТ УМНОЖЕНИЯ ВСЕХ МНОЖИТЕЛЕЙ
    function calculateMul(str) {
      const firstTerm = getFirstTermMul (str);
      const index = getIndexOfMul(str);

      if (index == -1) { return firstTerm; }
      return firstTerm * calculateMul (str.substr(index+1)); 
      }
    console.log (calculateMul("3*5*2"));

    // "2*3+4" => 3                   // ВОЗВРАЩАЕТ ИНДЕКС ПОД КОТОРЫМ ЗНАК +
    function getIndexOfSum(str) {
      for (let i = 0; i < str.length; i += 1) {
        if (getOperation(str[i]) == "+") {
          return i;
        }
      }
      return -1;
    }
    console.log (getIndexOfSum("2*3+4"));

    function getFirstTermSum(str) {
      let strResult = "";
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] != "+") {
          strResult += str[i]
        } else {
        return calculateMul(strResult);
        }
      }
      return calculateMul(strResult);
    }

    console.log (getFirstTermSum ("2+3")); // 2
    console.log (getFirstTermSum ("2*3+4")); // 6

console.log(calculateSum(s)); // 33
