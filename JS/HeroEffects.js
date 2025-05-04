import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 });
});

import { useEffect } from 'react';
import { gsap } from 'gsap';

const ArrowAnimation = () => {
  useEffect(() => {
    gsap.to('.arrow', {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 0.8,
    });
  }, []);

  return null;
};

export default ArrowAnimation;