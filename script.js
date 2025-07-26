document.addEventListener("DOMContentLoaded", () => {
    const skillBoxes = document.querySelectorAll(".skill-box");
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const box = entry.target;
          setTimeout(() => {
            box.classList.add("show");
          }, index * 300); // Delay for staggered animation
          obs.unobserve(box); // Only animate once
        }
      });
    }, {
      threshold: 0.2
    });
  
    skillBoxes.forEach(box => {
      observer.observe(box);
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in, .slide-up, .slide-left");
  
    const options = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
  
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    }, options);
  
    faders.forEach(el => {
      appearOnScroll.observe(el);
    });
  });

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "rgba(22, 27, 34, 0.6)";
    } else {
      nav.style.backgroundColor = "rgba(22, 27, 34, 0.95)";
    }
  });


  