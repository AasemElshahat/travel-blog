// ensures that the code runs only after the HTML document has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Header Scroll
  const header = document.querySelector(".header");
  const navIcon = document.querySelector(".header .links .icon");
  const navMenu = document.querySelector(".header .links ul");

  // this toggles the scrolled class on the header based on the scroll position
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  // this toggles the open class on the navigation menu when the icon is clicked
  if (navIcon && navMenu) {
    navIcon.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }


  // Back-To-Top Button
  const backToTopButton = document.getElementById("back-to-top");

  // this oggles the visible and bounce classes based on the scroll position
  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 100;
    backToTopButton.classList.toggle("visible", isScrolled);
    backToTopButton.classList.toggle("bounce", isScrolled);
  });

  // scrolls the page smoothly to the top when the button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animations
  // these are the elements from scss to be animated
  const elementsToAnimate = document.querySelectorAll(
    ".feat, .card, .featured-trips, .contact, .contact-form, .post, .fade-in, .slide-in-left, .slide-in-right, .zoom-in, .slide-in-up, .reveal"
  );

  // this function checks if the element is in view
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

  // this even listener runs the run funtion on these three events
  ['load', 'resize', 'scroll'].forEach(event =>
    window.addEventListener(event, run)
  );
});
