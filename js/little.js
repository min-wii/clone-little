// // image slide
const siteList = [
  "https://github.com/min-wii/clone-little/blob/main/images/site-1.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-2.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-3.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-4-1.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-5-1.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-6-1.JPG?raw=true",
  "https://github.com/min-wii/clone-little/blob/main/images/site-7-1.JPG?raw=true",
];

let currentIndex = 0;

function imgSlide() {
  document.querySelector(".site-intro img").src = siteList[currentIndex];
  currentIndex = (currentIndex + 1) % siteList.length;
}

setInterval(imgSlide, 1500);

// clock
const clockNumber = document.querySelector(".clock-number");

function createElements(container, count, elementType) {
  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push(
      `<span style="--index:${i}"><${elementType}>${i}</${elementType}></span>`
    );
  }
  container.insertAdjacentHTML("afterbegin", elements.join(""));
  return elements;
}

const numberElement = createElements(clockNumber, 12, "p");

function getCurrentTime() {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  // console.log(currentHour);
  // console.log(currentMinute);
  // console.log(currentSecond);

  const handHour = document.querySelector(".clock-hand .hour span");
  const handMinute = document.querySelector(".clock-hand .minute span");
  const handSecond = document.querySelector(".clock-hand .second span");

  handHour.style.transform = `rotate(${
    currentHour * 30 + currentMinute / 2
  }deg)`;
  handMinute.style.transform = `rotate(${currentMinute * 6}deg)`;
  handSecond.style.transform = `rotate(${currentSecond * 6}deg)`;
}

setInterval(getCurrentTime, 1000);

document.addEventListener("mousemove", (event) => {
  const pointLight = document.querySelector(".point-light");
  const x = event.pageX;
  const y = event.pageY;
  const pointLightRect = pointLight.getBoundingClientRect();
  const rectWidth = pointLightRect.width;
  const rectHeight = pointLightRect.height;

  pointLight.style.left = x - rectWidth / 2 + "px";
  pointLight.style.top = y - rectHeight / 2 + "px";
  console.log("x", x);
  console.log(rectWidth);
});
console.log("크기", window.innerWidth);

function highlightPointLight(isHovered) {
  const clockInner = document.querySelector(".clock-inner");
  const pointLight = document.querySelector(".point-light");
  clockInner.style.overflow = "hidden";
  pointLight.style.background = isHovered ? "#fff" : "none";
  pointLight.style.boxShadow = isHovered ? "0 0 1rem #fff" : "none";
}
