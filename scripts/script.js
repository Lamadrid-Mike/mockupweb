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

//fade-in animation
const elements = Array.from(document.querySelectorAll(".fade-effect"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    const intersecting = element.isIntersecting;
    if (intersecting) {
      if (element.target.classList.contains("right")) {
        element.target.classList.add("right__fade-in");
      }

      if (element.target.classList.contains("left")) {
        element.target.classList.add("left__fade-in");
      }
    }
  });
});

elements.forEach((el) => {
  observer.observe(el);
});
