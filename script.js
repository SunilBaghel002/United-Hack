// Ensure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  let isMenuOpen = false;

  hamburger.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle("active", isMenuOpen);
    gsap.to(navLinks, {
      duration: 0.4,
      x: isMenuOpen ? 0 : "100%",
      opacity: isMenuOpen ? 1 : 0,
      ease: "power3.out",
    });
    gsap.to(hamburger, {
      duration: 0.4,
      rotate: isMenuOpen ? 90 : 0,
      ease: "power3.out",
    });
  });

  // Smooth Scroll for Nav Links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetSection,
          offsetY: 60,
        },
        ease: "power3.out",
        onComplete: () => {
          if (isMenuOpen) {
            hamburger.click();
          }
        },
      });
    });
  });

  // Progress Bar
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });

  // Loader Animation
  window.addEventListener("load", () => {
    gsap.to("#loader", {
      duration: 1,
      opacity: 0,
      scale: 1.1,
      ease: "power4.out",
      onComplete: () => {
        document.getElementById("loader").style.display = "none";
      },
    });
  });

  // Hero Section Particle Background
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
    });
  }
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(91, 25, 227, 0.5)";
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Footer Particle Background
  const footerCanvas = document.getElementById("footer-particles");
  const footerCtx = footerCanvas.getContext("2d");
  footerCanvas.width = window.innerWidth;
  footerCanvas.height = document.querySelector("footer").offsetHeight;
  const footerParticles = [];
  for (let i = 0; i < 50; i++) {
    footerParticles.push({
      x: Math.random() * footerCanvas.width,
      y: Math.random() * footerCanvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    });
  }
  function animateFooterParticles() {
    footerCtx.clearRect(0, 0, footerCanvas.width, footerCanvas.height);
    footerParticles.forEach((p) => {
      footerCtx.beginPath();
      footerCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      footerCtx.fillStyle = "rgba(91, 25, 227, 0.4)";
      footerCtx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > footerCanvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > footerCanvas.height) p.speedY *= -1;
    });
    requestAnimationFrame(animateFooterParticles);
  }
  animateFooterParticles();

  // GSAP Animations with ScrollTrigger
  // gsap.from("#hero-title", {
  //   duration: 1,
  //   y: 100,
  //   opacity: 0,
  //   ease: "power4.out",
  // });
  // gsap.from("#hero-subtitle", {
  //   duration: 1,
  //   y: 100,
  //   opacity: 0,
  //   delay: 0.2,
  //   ease: "power4.out",
  // });
  // gsap.from("#hero-text", {
  //   duration: 1,
  //   y: 100,
  //   opacity: 0,
  //   delay: 0.4,
  //   ease: "power4.out",
  // });
  // gsap.from(".timer div", {
  //   duration: 1.2,
  //   scale: 0,
  //   opacity: 0,
  //   delay: 0.6,
  //   stagger: 0.2,
  //   ease: "elastic.out(1, 0.5)",
  // });
  // gsap.from("#hero-btn", {
  //   duration: 1,
  //   y: 100,
  //   opacity: 0,
  //   delay: 1,
  //   ease: "power4.out",
  // });

  // gsap.utils.toArray("section").forEach((section) => {
  //   gsap.from(
  //     section.querySelectorAll(
  //       ".feature-card, .criteria-card, .timeline-item, .theme-card, .mentor-card, .faq-item"
  //     ),
  //     {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //       duration: 0.8,
  //       y: 80,
  //       opacity: 0,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //     }
  //   );
  // });

  // Anime.js for Navigation Links and Icons
  // anime({
  //   targets: ".nav-links li a",
  //   translateY: [-20, 0],
  //   opacity: [0, 1],
  //   delay: anime.stagger(100, { start: 500 }),
  //   duration: 600,
  //   easing: "easeOutQuad",
  // });
  // anime({
  //   targets:
  //     ".feature-card i, .criteria-card i, .theme-card i, .mentor-card i, .timeline-content i, #eligibility ul li i, .faq-item h3 i",
  //   scale: [0, 1],
  //   rotate: "0.5turn",
  //   opacity: [0, 1],
  //   delay: anime.stagger(100),
  //   duration: 800,
  //   easing: "easeOutElastic",
  // });
  // anime({
  //   targets: ".social-link",
  //   translateY: [-20, 0],
  //   opacity: [0, 1],
  //   delay: anime.stagger(100, { start: 800 }),
  //   duration: 600,
  //   easing: "easeOutQuad",
  // });

  // FAQ Toggle Functionality
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.toggle("active");
      const answer = item.querySelector("p");
      gsap.to(answer, {
        duration: 0.3,
        opacity: isActive ? 1 : 0,
        height: isActive ? "auto" : 0,
        ease: "power2.out",
      });
    });
  });

  // Countdown Timer
  function updateTimer() {
    const targetDate = new Date("2025-06-12T10:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  // Resize Canvases on Window Resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    footerCanvas.width = window.innerWidth;
    footerCanvas.height = document.querySelector("footer").offsetHeight;
  });
});
