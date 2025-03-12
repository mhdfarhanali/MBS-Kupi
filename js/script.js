// Toogle the class "active" on the menu
const navbarNav = document.querySelector(".navbar-nav");

// Hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar hilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const aboutSection = document.getElementById("about");
const animateLeftElements = document.querySelectorAll(".animate-left");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const aboutSectionTop = aboutSection.offsetTop;

  if (scrollPosition >= aboutSectionTop) {
    animateLeftElements.forEach((element) => {
      element.classList.add("animate-left-scroll");
    });
  } else {
    animateLeftElements.forEach((element) => {
      element.classList.remove("animate-left-scroll");
    });
  }
});

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
