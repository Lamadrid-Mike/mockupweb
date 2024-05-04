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

//fade-in element effects
const elements = Array.from(document.querySelector(".third__section").children);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    const intersecting = element.isIntersecting;
    console.log(element.target.classList);
  });
});

elements.forEach((el) => {
  observer.observe(el);
});
