const box = document.querySelector(".box");
window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    box.classList.add("active");
  }
});
