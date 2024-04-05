const backgrounds = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const randomBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomBackground}`;

document.body.appendChild(bgImg);
