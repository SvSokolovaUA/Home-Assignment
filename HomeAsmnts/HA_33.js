'use strict';
const val = document.querySelector("body");

checkChilds(val, 1);

function checkChilds(elem, parentLevel) {

    let arr = Array.from(elem.children);

    let i =0;
    let el = arr[i];
    
    for (; ; ) {
        console.log(parentLevel+1, el.nodeType, el.nodeName, el.className);

        if (el.firstElementChild !== null) {
            
            el = el.firstElementChild;
            parentLevel+=1;
            
        } else if (el.nextElementSibling !== null) {
            el = el.nextElementSibling;
            
        } else if (el.nextElementSibling === null && i < arr.length) { 
           el = arr[i+=1];
        parentLevel = 1;
        }
    }
    }



// function checkChilds(elem, parentLevel) {
// let arr = Array.from(elem.children);
// for (let i =0; i < arr.length; i+=1) {
//     let el = arr[i];
//     console.log(parentLevel+1, el.nodeType, el.nodeName, el.className);
//     if(el.hasChildNodes) {
//         checkChilds(el, parentLevel+1);
//     }
//     }
// }