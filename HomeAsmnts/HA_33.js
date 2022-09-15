'use strict';

const val = document.querySelector("body");

checkChilds(val, 1);

function checkChilds(el, parentLevel) {

    for (; ; ) {
        
        if (el.firstElementChild !== null) {
            el = el.firstElementChild;
            parentLevel+=1;
            console.log(parentLevel, el.nodeType, el.nodeName, el.className);

        } else if (el.nextElementSibling !== null) {
            el = el.nextElementSibling;
            console.log(parentLevel, el.nodeType, el.nodeName, el.className);
            
        } else if (el.firstElementChild === null && el.nextElementSibling === null && parentLevel > 1) {
            for (let i = 1; i < parentLevel-1; i+=1) {
                el = el.parentNode;
            }
            if (el.nextElementSibling !== null) {
            el = el.nextElementSibling;
            parentLevel = 2;
            console.log(parentLevel, el.nodeType, el.nodeName, el.className);
            }
        } else {
            break;
        }
    }
    }


// function checkChilds(elem, parentLevel) {

//     let arr = Array.from(elem.children);

//     let i =0;
//     let el = arr[i];
    
//     for (; ; ) {
//         console.log(parentLevel+1, el.nodeType, el.nodeName, el.className);

//         if (el.firstElementChild !== null) {
            
//             el = el.firstElementChild;
//             parentLevel+=1;
            
//         } else if (el.nextElementSibling !== null) {
//             el = el.nextElementSibling;
            
//         } else if (el.nextElementSibling === null && i < arr.length) { 
//            el = arr[i+=1];
//            parentLevel = 1;
//         } else if (i >= arr.length) {
//             break;
//         }
//     }
//     }



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