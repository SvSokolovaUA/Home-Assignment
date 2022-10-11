'use strict';

const filter = document.getElementById("filter");
const tasksToFilter = Array.from(document.querySelectorAll("li"));

filter.addEventListener("keyup", onKeyup);

function onKeyup(e) {
    e.preventDefault();
    
    tasksToFilter.forEach(el => {

        if (el.textContent.includes(filter.value)) {
            el.style.display = "";
        } else {
            el.style.display = "none";

        }
    
    });
}


