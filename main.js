const element = document.querySelector(".circle");
const circleBtn = document.querySelector(".btn");

circleBtn.addEventListener("click", function () {
  element.classList.toggle("circle_2");
});

let list = document.querySelector(".list");
const item = document.querySelector(".list__item");
const listBtn = document.querySelector(".listbtn");

listBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = "リスト";
  list.appendChild(li);
});
