                'use strict'

function matrix(str) {
    let arr = [];
    let newStr = str;    

    for (let i = 0; i < str.length; i+=1) {
        if (getIndexDiv(newStr) == -1) {
            arr.push (getArray(getFirstStr(newStr)));
            return arr;
        }
        arr.push (getArray(getFirstStr(newStr)));
        newStr = newStr.substr(getIndexDiv (newStr) +1);
    }
}
console.log(matrix("1 2 3\n4 5.5 6")); //  [[1, 2, 3], [4, 5.5, 6]]

function getIndexDiv(str) {         // индекс символа новой строки \n
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] == "\n") {
            return i;
        }
    }
        return -1;
}
console.log(getIndexDiv("1 2 3\n4 5.5 6")); // 5

function getFirstStr(str) {         // строка до символа новой строки
    let firstStr;
    let indexDiv = getIndexDiv(str);

        if (indexDiv == -1) {
            firstStr = str;
        } else { firstStr = str.substr(0, indexDiv); }
        return firstStr;
}
console.log(getFirstStr("1 2 3\n4 5.5 6")); // "1 2 3"

function getIndSpace (str) {        // индекс пробела
    let indSpace;
    for (let i = 0; i < str.length; i+=1) {
        if (str[i] == " ") {
            return i;
        }
        indSpace = -1;
    }
    return indSpace;
}
console.log(getIndSpace("1 2 3"));  // 1
console.log(getIndSpace("5.5 6"));  // 3

function getArray(str) {            // массив из части строки до  символа новой  строки
    let newArray = [];
    let numStr = str;

        for (let i = 0; i < str.length; i+=1) {
            if (getIndSpace(numStr) == -1) {
                newArray.push(Number(numStr));
                return newArray;
            }
            newArray.push (Number(numStr.substr(0, getIndSpace(numStr))));
           
            numStr = numStr.substr(getIndSpace(numStr) + 1);
            
        }
        return newArray;
}
console.log(getArray("4 5.5 6")) // [4, 5.5, 6]