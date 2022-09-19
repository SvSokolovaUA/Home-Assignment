'use strict';

const filter = document.getElementById("filter");

filter.addEventListener("keydown", onKeydown);
const tasksToFilter = Array.from(document.querySelectorAll("li"));

function onKeydown(e) {
    e.preventDefault();
    
    tasksToFilter.forEach(el => {
        // let text = el.firstElementChild.nextSibling.textContent;
        if (el.textContent !== filter.value) {
        el.style.display = "none";
        }
    });
  
}


