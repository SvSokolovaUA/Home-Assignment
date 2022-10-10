'use strict';

const filter = document.getElementById("filter");
const tasksToFilter = Array.from(document.querySelectorAll("li"));

filter.addEventListener("keyup", onKeyup);

function onKeyup(e) {
    e.preventDefault();
    
    tasksToFilter.forEach(el => {

        if (el.textContent !== `\n           \n          ${filter.value} \n          x\n        `) {
        el.style.display = "none";
        } else {

            el.style.display = "";
        }
    
    });
}


