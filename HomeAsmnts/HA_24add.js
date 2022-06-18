'use strict'
function tellToBob(sent) {
    if (sent[sent.length-1] == "?") {
        return "Конечно";
    } 
    if (getCase(sent) == true) {
        return "Вау, расслабься!";
    }
}

function getCase (sent) {
    for (let i=0; i<sent.length; i+=1) {
        let letter = sent[i];
        if (letter == letter.toLowerCase()) {
            return false;
        } else return true;
    }
}