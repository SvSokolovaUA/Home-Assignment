'use strict';
// HA 1. Event for x-sign - to delete the row

let xsigns = document.querySelectorAll(".delete"); // NodeList всех а-элементов (которые содержат Х)

xsigns.forEach(e => {
    e.addEventListener("click", event => {
        event.preventDefault();
        e.parentNode.remove();
    });
})



