const btn = document.querySelector(".btn");
const text = document.querySelector(".input");
const list = document.querySelector(".list");

btn.addEventListener("click", function () {
  const value = text.value;
  let li = document.createElement("li");
  li.innerHTML = value;
  list.appendChild(li);
});
