import { gsap } from "gsap";

// About avatar mouse parallax (solo se ejecuta con el puntero encima)
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
