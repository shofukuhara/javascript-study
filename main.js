let num = 0;
let tar = 200;

setInterval(function () {
  if (num <= tar) {
    document.querySelector(".number").innerText = num;
    num++;
  }
}, 20);
