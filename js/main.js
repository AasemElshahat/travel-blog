document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navIcon = document.querySelector(".header .links .icon");
  const navMenu = document.querySelector(".header .links ul");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (navIcon && navMenu) {
    navIcon.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }
});

// Animations
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".feat, .card, .featured-trips, .contact, .contact-form, .post"
  );

  const inView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () => {
    elements.forEach((el) => {
      if (inView(el)) {
        el.classList.add("in-view");
      }
    });
  };

  window.addEventListener("load", run);
  window.addEventListener("resize", run);
  window.addEventListener("scroll", run);
});

// Back-To-Top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopButton.classList.add("visible");
      backToTopButton.classList.add("bounce");
    } else {
      backToTopButton.classList.remove("visible");
      backToTopButton.classList.remove("bounce");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Intersection Observer for scroll animations
  const elements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .zoom-in, .slide-in-up"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// scrolling animations
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
