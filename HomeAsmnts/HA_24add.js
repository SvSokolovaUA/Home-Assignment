'use strict'
function tellToBob(sent) {
    let newSent = sent.substr(0, sent.length - 1);
    let lastLetter = sent[sent.length - 1];
    
    if (getIfUpper(newSent) && lastLetter == "?") {
        return "Успокойся, я знаю, что делаю!";
    }
    
    if (!getIfUpper(newSent) && lastLetter == "?") {
        return "Конечно";
    } 

    if (getIfUpper(sent) == true) {
        return "Вау, расслабься!";
    }
    
}

function getIfUpper (sent) {
    for (let i=0; i<sent.length; i+=1) {
        let letter = sent[i];
        if (letter == letter.toLowerCase()) {
            return false;
        } else {return true};
    }
}