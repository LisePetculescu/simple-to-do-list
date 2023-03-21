"use strict";

console.log("app.ja is running...");
window.addEventListener("load", startApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function startApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");
  listText.textContent = newToDo.value;
  listBtn.textContent = "Delete";

  console.log(listItem);
  console.log(listText);
  console.log(listBtn);

  listItem.appendChild(listText);
  listItem.appendChild(listBtn);

  list.appendChild(listItem);
  newToDo.value = "";

  listBtn.addEventListener("click", removeToDo);
}

function removeToDo() {
  this.parentNode.remove();
}
