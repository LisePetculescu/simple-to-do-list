"use strict";

console.log("app.ja is running...");
window.addEventListener("load", startApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function startApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  if (newToDo.value.trim() != "") {
    const myHTML = /*html*/ `
    <li> 
    <span>${newToDo.value}</span>
    <button class="delete">Delete</button>
    <button class="edit">Edit</button>

    
    </li>`;
    list.insertAdjacentHTML("beforeEnd", myHTML);
    newToDo.value = "";

    list
      .querySelector("li:last-child button.delete")
      .addEventListener("click", removeToDo);

    list
      .querySelector("li:last-child button.edit")
      .addEventListener("click", editToDo);
  } else {
    newToDo.value = "";
    newToDo.focus();
  }
}

function removeToDo() {
  this.parentNode.remove();
}

function editToDo() {
  console.log(this);
  this.parentNode.querySelector("span").setAttribute("contenteditable", true);
  this.removeEventListener("click", editToDo);
  this.textContent = "save";
  this.addEventListener("click", sayToDo);
  this.parentNode.querySelector("span").focus();
  console.log(this.parentNode);
}

function sayToDo() {
  this.parentNode.querySelector("span").setAttribute("contenteditable", false);
  this.removeEventListener("click", sayToDo);
  this.textContent = "Edit";
  this.addEventListener("click", editToDo);
}
