'use strict';
const val = document.querySelector("body");

checkChilds(val, 1);

function checkChilds(elem, parentLevel) {
let arr = Array.from(elem.children);
for (let i =0; i < arr.length; i+=1) {
    let el = arr[i];
    console.log(parentLevel+1, el.nodeType, el.nodeName, el.className);
    if(el.hasChildNodes) {
        checkChilds(el, parentLevel+1);
    }
}
}

