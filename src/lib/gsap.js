import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animated aurora background - smooth blobs
const blobs = document.querySelectorAll(".hero-blob");
if (blobs.length) {
  const colors = [
    "rgba(59,130,246,0.25)",
    "rgba(16,185,129,0.20)",
    "rgba(147,51,234,0.18)",
  ];
  const sizes = [
    { w: 550, h: 550 },
    { w: 420, h: 420 },
    { w: 480, h: 480 },
  ];
  blobs.forEach((blob, i) => {
    const { w, h } = sizes[i];
    blob.style.width = w + "px";
    blob.style.height = h + "px";
    blob.style.background = colors[i];
    gsap.set(blob, { x: -w / 2, y: -h / 2, opacity: 0.6 });
  });

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
  tl.to(blobs[0], { xPercent: 120, yPercent: 60, duration: 10 }, 0)
    .to(blobs[1], { xPercent: 60, yPercent: 140, duration: 12 }, 0)
    .to(blobs[2], { xPercent: 160, yPercent: 40, duration: 14 }, 0)
    .to(blobs[0], { xPercent: 60, yPercent: 140, duration: 10 }, "+=1")
    .to(blobs[1], { xPercent: 160, yPercent: 60, duration: 12 }, "<")
    .to(blobs[2], { xPercent: 60, yPercent: 150, duration: 14 }, "<")
    .to(blobs[0], { xPercent: 0, yPercent: 0, duration: 10 }, "+=1")
    .to(blobs[1], { xPercent: 0, yPercent: 0, duration: 12 }, "<")
    .to(blobs[2], { xPercent: 0, yPercent: 0, duration: 14 }, "<");
}

// About avatar mouse parallax
const aboutAvatar = document.querySelector(".about-avatar");
if (aboutAvatar) {
  const avatarInner = aboutAvatar.querySelector(".relative.group");
  const avatarImg = aboutAvatar.querySelector("img");
  if (avatarInner && avatarImg) {
    const strength = 12;
    aboutAvatar.addEventListener("mousemove", (e) => {
      const rect = aboutAvatar.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(avatarInner, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(avatarImg, {
        x: x * strength * 0.2,
        y: y * strength * 0.2,
        duration: 0.6,
        ease: "power2.out",
      });
    });
    aboutAvatar.addEventListener("mouseleave", () => {
      gsap.to([avatarInner, avatarImg], {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }
}

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