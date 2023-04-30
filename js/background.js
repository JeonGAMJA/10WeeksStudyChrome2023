const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //append는 가장 뒤 prepend는 가장 앞

// const bg1 = document.querySelector(".bg1");
// const bg2 = document.querySelector(".bg2");
// const bg3 = document.querySelector(".bg3");

// const images = ["bg1", "bg2", "bg3"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// // const bgImage = document.body.classList.add(`.bg${chosenImage}`);

// document.body.classList.add(`${chosenImage}`); //append는 가장 뒤 prepend는 가장 앞
