import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero section animations - Optimized
const heroTl = gsap.timeline({ defaults: { duration: 0.3, ease: "power1.out" }});

// Set initial state for buttons
gsap.set(".links", { y: 10, opacity: 0 });

heroTl
  .from(".title", { y: 10, opacity: 0 })
  .from("h1.subtitle", { y: 15, opacity: 0, scale: 0.98 }, "-=0.1")
  .from("div.subtitle", { y: 10, opacity: 0 }, "-=0.1")
  .to(".links", { y: 0, opacity: 1, stagger: 0.05 }, "-=0.1");

// Optimized scroll animations with reduced frequency
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const animateOnScroll = (elements, animation) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animation(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
};

// Projects section - Optimized
animateOnScroll(document.querySelectorAll('.projects'), (project) => {
  gsap.to(project, { y: 0, opacity: 1, duration: 0.4, ease: 'power1.out' });
});

// Simplified hover effects
const projectImages = document.querySelectorAll('.projects img');
projectImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.02)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// About section - Optimized
animateOnScroll(document.querySelectorAll('#about'), (about) => {
  gsap.to(about, { y: 0, opacity: 1, duration: 0.5, ease: 'power1.out' });
});

const aboutImg = document.querySelector('#about img');
if (aboutImg) {
  animateOnScroll([aboutImg], (img) => {
    gsap.to(img, { scale: 1, opacity: 1, duration: 0.4, ease: 'power1.out' });
  });
}

// Skills section - Simplified
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('li');
      gsap.to(items, { y: 0, opacity: 1, duration: 0.3, stagger: 0.02, ease: 'power1.out' });
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('#skills .grid > div').forEach(section => {
  skillsObserver.observe(section);
});

// Section headers - Simplified
const headersObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { y: 0, opacity: 1, duration: 0.4, ease: 'power1.out' });
      headersObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("#skills h2, #about h2, #projects h2").forEach(header => {
  headersObserver.observe(header);
});

// Image animations - Simplified
animateOnScroll(document.querySelectorAll('.image'), (img) => {
  gsap.to(img, { y: 0, opacity: 1, duration: 0.4, ease: 'power1.out' });
});

// Simplified background animation - much more performant
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  // Use CSS transitions instead of GSAP for background
  heroBg.style.transition = 'background 8s ease-in-out';
  
  let isActive = false;
  setInterval(() => {
    isActive = !isActive;
    heroBg.style.background = isActive 
      ? 'radial-gradient(circle at center, #1e293b 0%, #0f172a 60%, #020617 100%, #000000 100%)'
      : 'radial-gradient(circle at center, #1e293b 0%, #0f172a 30%, #020617 70%, #000000 100%)';
  }, 8000);
}