const btn = document.querySelector("header .container .btn");
const navigatinBar = document.querySelector("header .container .navigation ul");
let navigatin = document.getElementById("header");
const allLis = document.querySelectorAll("header .container .navigation ul li");
const scrollProgress = document.querySelector(".scroll-height");
const totalHeight = document.body.scrollHeight - window.innerHeight;
const scrollProgressDiv = document.querySelector(".scroll-height > div");

btn.addEventListener("click", function () {
  navigatinBar.classList.toggle("show");
});

allLis.forEach(function (e) {
  e.onclick = function () {
    navigatinBar.classList.remove("show");
  };
});

let scrollbtn = document.querySelector(".scroll");

window.onscroll = function () {
  if (window.scrollY >= 150) {
    navigatin.classList.add("fixed");
  } else {
    navigatin.classList.remove("fixed");
  }
  if (window.scrollY >= 600) {
    scrollbtn.style.display = "flex";
  } else {
    scrollbtn.style.display = "none";
  }
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  if (window.scrollY <= 0) {
    scrollProgress.style.display = "none";
  } else {
    scrollProgress.style.display = "block";
  }
  scrollProgressDiv.style.width = `${progressHeight}%`;
};

scrollbtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};

let copyRight = document.querySelector("footer .container .footer-title sub");

copyRight.innerHTML = new Date().getFullYear();



scrollProgress.style.top = `${
  document.querySelector("header#header").offsetHeight
}px`;
window.onresize = function () {
  scrollProgress.style.top = `${
    document.querySelector("header#header").offsetHeight
  }px`;
};
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
});
