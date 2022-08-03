const images = [
  "images/image000.jpg",
  "images/image001.jpg",
  "images/image002.jpg",
  "images/image003.jpg",
];

let currentIndex = 0;

const mainImage = document.getElementById("carousel__main");

mainImage.src = images[currentIndex];

console.log(mainImage.src);

for (let i of images) {
  console.log(i);
}
