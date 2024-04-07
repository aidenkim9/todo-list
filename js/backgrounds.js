const backgrounds = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomBackground}`;

document.body.appendChild(bgImg);
