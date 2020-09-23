const text = "I love my positive feedbacker ❤ "

let index = 0;

function writeTex(){
  document.body.innerHTML = text.slice (0, index);

  index++;

  if (index > text.length - 1){
    index = 0;
  }
}

setInterval(writeTex, 100);