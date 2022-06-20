'use strict'

let talk = prompt ("Скажите что-то Бобу");
alert (tellToBob(talk));

function tellToBob(sent) {
    let newSent = sent.substr(0, sent.length - 1);
    let lastLetter = sent[sent.length - 1];
    
    if (sent.length == 0) {
        return "Хорошо. Пусть так и будет!";
    } else if (lastLetter == "?") {
        if (getIfUpper(newSent)) {
            return  "Успокойся, я знаю, что делаю!"
        } else {return "Конечно"; };
    } 
    
    else if (getIfUpper(sent)) {
        return "Вау, расслабься!";
    } else {
        return "Всё равно";
    }
}


function getIfUpper (sent) {
    
    for (let i=0; i<sent.length; i+=1) {
        let letter = sent[i];
        if (letter == letter.toLowerCase() && letter.toLowerCase() != " ") {
            return false;
        }
    }
    return true;
}