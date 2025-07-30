'use client';

import { useEffect, RefObject } from 'react';

export function useScrollAnimation(containerRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        const animation = el.dataset.animate;

        if (entry.isIntersecting) {
          el.classList.remove("animate__hidden");
          el.classList.remove("animate__animated", animation || '');

          // Force reflow to restart animation
          void el.offsetWidth;

          if (animation) {
            el.classList.add("animate__animated", animation);
          }
        } else {
          // Remove animation classes so it can trigger again
          el.classList.remove("animate__animated", animation || '');
          el.classList.add("animate__hidden");
        }
      });
    }, { threshold: 0 });

    if (containerRef.current) {
      const animatedElements = containerRef.current.querySelectorAll("[data-animate]");
      animatedElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [containerRef]);
}