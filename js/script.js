const btn = document.querySelector("header .container .btn");
const navigatinBar = document.querySelector("header .container .navigation ul");

const allLis = document.querySelectorAll("header .container .navigation ul li");

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
  if (window.scrollY >= 600) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
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
