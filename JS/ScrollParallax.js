import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    gsap.fromTo(".hero-title", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  });git log --oneline