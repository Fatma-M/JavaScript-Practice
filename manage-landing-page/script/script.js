const imgs = document.getElementById("testimonials-boxes");

const img = document.querySelectorAll(".testimonials-box");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeImg();
}

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 250}px)`;
}
