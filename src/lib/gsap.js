import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
  defaults: {
    duration: 0.6,
    ease: "power2.out",
    y: 10,
    opacity: 0
  },
});



// Hero section animations - Faster version
tl
  // Console log text
  .from(".title", {
    y: 10,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  })
  // Main heading
  .from("h1.subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(2.5)",
    scale: 0.95,

  }, "-=.2")
  // Role text
  .from("div.subtitle", {
    y: 15,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  }, "-=.3")
  // Description box
  .from(".relative.group > .relative", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",

  }, "-=.2")
  // Buttons
  .from(".links", {
    y: 15,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",

  }, "-=.2");

// Projects section animations - Faster version
gsap.utils.toArray('.projects').forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: 'top 90%',
      end: 'bottom 10%',
      toggleActions: 'play none none reverse',
      once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
    delay: i * 0.02
  });

  // Image hover effect - Faster
  const img = project.querySelector('img');
  if (img) {
    img.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  }
});

// About section animations - Faster version
gsap.from("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none none',
    once: true
  },
  y: 20,
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out'
});

gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none none',
    once: true
  },
  scale: 0.95,
  opacity: 0,
  duration: 0.6,
  ease: 'back.out(2)',
  delay: 0.1
});

// Skills section animations - Faster version
const skillSections = [
  { selector: "#skills .grid > div:nth-child(1) ul li", delay: 0 },
  { selector: "#skills .grid > div:nth-child(2) ul li", delay: 0.02 },
  { selector: "#skills .grid > div:nth-child(3) ul li", delay: 0.04 }
];

skillSections.forEach(section => {
  gsap.utils.toArray(section.selector).forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 92%',
        end: 'bottom 8%',
        toggleActions: 'play none none none',
        once: true
      },
      y: 15,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      delay: i * 0.03 + section.delay
    });
  });
});

// Section header animations - Faster version
const sectionHeaders = [
  "#skills h2",
  "#about h2",
  "#projects h2"
];

sectionHeaders.forEach(selector => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 92%',
      toggleActions: 'play none none none',
      once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
});

gsap.from('.image', {
  scrollTrigger: {
    trigger: ".image",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 1,
  duration: .6,
  ease: "power3.out",
  stagger: .1,
})






// Categorías de habilidades
gsap.utils.toArray(".skills-category").forEach((category, i) => {
  gsap.from(category, {
    scrollTrigger: {
      trigger: category,
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 15%",
      once: true
    },
    x: i % 2 === 0 ? -10 : 10,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Items de habilidades
gsap.utils.toArray(".skill-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item.closest('.gsap-list'),
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 10%",
    },
    y: 10,
    opacity: 0,
    duration: 0.6,
    delay: 0.02 * (i % 10), // Agrupar por decenas para evitar retrasos muy largos
    ease: "back.out(1.2)",
    stagger: {
      amount: 0.5
    }
  });
});

// Items de certificados
gsap.utils.toArray(".certificate-item").forEach((item, i) => {
  // Animación del logo
  const logo = item.querySelector('.certificate-logo');
  gsap.from(logo, {
    scrollTrigger: {
      trigger: item,
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 15%",
      once: true
    },
    scale: 0.5,
    opacity: 0,
    duration: 0.4,
    delay: i * 0.1,
    ease: "back.out(1.7)"
  });

  // Animación del contenido
  
  gsap.from(".certificate-content", {
    scrollTrigger: {
      trigger: item,
      toggleActions: "play none none reverse",
      start: "top 85%",
      end: "bottom 15%",
      once: true
    },
    x: i % 2 === 0 ? 30 : -30,
    opacity: 0,
    duration: 0.4,
    delay: 0.05 + (i * 0.1),
    ease: "power2.out"
  });
});


// Animación del fondo
const bgTl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatRefresh: true
});

bgTl.to(".hero-bg", {
  "--inner-stop": "60%",
  "--outer-stop": "100%",
  duration: 8,
  ease: "sine.inOut",
  onUpdate: function() {
    // Forzar repintado para mejor rendimiento
    document.querySelector('.hero-bg').style.willChange = 'background';
  },
  onComplete: function() {
    document.querySelector('.hero-bg').style.willChange = 'auto';
  }
})
.to(".hero-bg", {
  "--inner-stop": "30%",
  "--outer-stop": "70%",
  duration: 12,
  ease: "sine.inOut"
}, ">2")