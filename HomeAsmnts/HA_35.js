"use strict";

function deleteItem(event) {
    if (
      event.target.nodeName != "A" ||
      !event.target.classList.contains("delete")
    ) {
      return;
    }
    
    const targetToDel = event.target.parentNode;

    targetToDel.remove();
  }
  
  document.getElementById("task-list").addEventListener("click", deleteItem);

