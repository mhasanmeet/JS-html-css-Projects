function createPurpleHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💜";

  document.body.appendChild(heart);

  // setTimeout(() =>{
  //   heart.remove();
  // }, 4000)
}

function createOrangeHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "🧡";

  document.body.appendChild(heart);

  // setTimeout(() =>{
  //   heart.remove();
  // }, 4000)
}

function createGreenHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💚";

  document.body.appendChild(heart);

  // setTimeout(() =>{
  //   heart.remove();
  // }, 4000)
}

setInterval(createPurpleHeart, 300);
setInterval(createOrangeHeart, 300);
setInterval(createGreenHeart, 300);