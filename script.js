// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f2fe" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f2fe",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Scroll Animations
const faders = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(section => {
  appearOnScroll.observe(section);
});

// Mobile Navbar Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.classList.toggle("active");
});

// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing");
  const roles = [
    "Full Stack Developer",
    "Creative Technologist",
    "AI / Hardware Engineer"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex++);
      if (charIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500); 
        return;
      }
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();
});

// Contact Form Submission
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  })
    .then(() => {
      popup.classList.remove("hidden");
      form.reset();
      setTimeout(() => popup.classList.add("hidden"), 4000);
    })
    .catch(() => alert("There was an error. Please try again later."));
});