const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

function hello() {
  btn.style.color = "blue";
}

function bgColor() {
  h1.style.backgroundColor = "red";
}

btn.addEventListener("click", hello);
btn.addEventListener("click", bgColor);
