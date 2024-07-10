document.addEventListener("DOMContentLoaded", function () {
  // Header Scroll
  const header = document.querySelector(".header");
  const navIcon = document.querySelector(".header .links .icon");
  const navMenu = document.querySelector(".header .links ul");

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  if (navIcon && navMenu) {
    navIcon.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }

  // Back-To-Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 100;
    backToTopButton.classList.toggle("visible", isScrolled);
    backToTopButton.classList.toggle("bounce", isScrolled);
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animations
  const elementsToAnimate = document.querySelectorAll(
    ".feat, .card, .featured-trips, .contact, .contact-form, .post, .fade-in, .slide-in-left, .slide-in-right, .zoom-in, .slide-in-up, .reveal"
  );

  const inView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  };

  const run = () => {
    elementsToAnimate.forEach((el) => {
      if (inView(el)) {
        el.classList.add("in-view");
      }
    });
  };

  ['load', 'resize', 'scroll'].forEach(event =>
    window.addEventListener(event, run)
  );
});
