//mobile navbar functionality
const openBtn = document.querySelector(".open__btn");
const closeBtn = document.querySelector(".close__btn");
const navBar = document.querySelector(".mobile-navbar");

const openNav = function () {
  openBtn.style.display = "none";
  navBar.style.width = "100%";
  closeBtn.style.display = "block";
};

const closeNav = function () {
  openBtn.style.display = "block";
  navBar.style.width = "0%";
  closeBtn.style.display = "none";
};

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
