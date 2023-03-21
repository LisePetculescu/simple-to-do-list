"use strict";

console.log("app.ja is running...");
window.addEventListener("load", startApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function startApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  const myHTML = /*html*/ `
    <li> 
    <span>${newToDo.value}</span>
    <button>Delete</button>
    </li>`;
  list.insertAdjacentHTML("beforeEnd", myHTML);
  newToDo.value = "";

  list
    .querySelector("li:last-child button")
    .addEventListener("click", removeToDo);
}

function removeToDo() {
  this.parentNode.remove();
}
