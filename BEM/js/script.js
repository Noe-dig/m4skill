const data = [
    "./infinite_img/teto.png",
    "./infinite_img/teto2.png",
    "./infinite_img/teto3.png",
    "./infinite_img/teto4.png",
    "./infinite_img/teto5.png",
    "./infinite_img/teto6.png",
    "./infinite_img/teto7.png",
    "./infinite_img/teto8.png",
    "./infinite_img/teto9.png",
    "./infinite_img/teto10.png"
];



const audio = document.getElementById("myAudio");

let imgCount = 0;
const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");

function fetchImage() {
  if (imgCount < 1000) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const randomSize = Math.random()*30+"rem";
        console.log(randomSize);
        const image = document.createElement("img");
        image.src = data[i];
        image.style.width = randomSize;
        rootElement.appendChild(image);
      }
      imgCount += 5;
    }, 500);
  } else {
    console.log("fail");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchImage();
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(loader);
});

window.onload = function() {
    document.getElementById("myAudio").play();
}