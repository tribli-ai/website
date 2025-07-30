'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function MessageSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observer for highlight animations
    const highlightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // Remove to restart animation
          el.classList.remove("animate-in");
          void el.offsetWidth; // force reflow
          el.classList.add("animate-in");
        } else {
          // Optional: remove to allow re-triggering
          el.classList.remove("animate-in");
        }
      });
    }, {
      threshold: 0.5
    });

    // Observer for underline animation
    const underlineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // Reset the animation
          el.classList.remove('visible');
          void el.offsetWidth; // Trigger reflow
          el.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll("[data-animate]");
      animatedElements.forEach(el => {
        observer.observe(el);
      });

      const highlightElements = sectionRef.current.querySelectorAll('.highlight, .highlight2');
      highlightElements.forEach(el => {
        highlightObserver.observe(el);
      });

      const underlineElements = sectionRef.current.querySelectorAll('.scroll-animate');
      underlineElements.forEach(el => {
        underlineObserver.observe(el);
      });
    }

    // Timeout for highlight background animations
    const timer1 = setTimeout(() => {
      const animating = document.querySelectorAll('.highlighted.animating');
      animating.forEach(el => {
        el.classList.remove('animating');
      });
    }, 2000);

    const timer2 = setTimeout(() => {
      const animating = document.querySelectorAll('.highlighted2.animating');
      animating.forEach(el => {
        el.classList.remove('animating');
      });
    }, 3000);

    return () => {
      observer.disconnect();
      highlightObserver.disconnect();
      underlineObserver.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="message-section py-5" ref={sectionRef}>
      <div className="container text-center position-relative">
        {/* Top-right arrow SVG */}
        <Image 
          src="/right-down.svg" 
          alt="Arrow Up Right" 
          width={40} 
          height={40}
          className="decor-arrow-top animate__hidden animate__delay-1s animate__duration-1s" 
          data-animate="animate__fadeInDown"
        />
        
        <div className="animate__hidden" data-animate="animate__slideInUp">
          <h3 className="working-on-section-style pt-5">
            We&apos;re working on<br />something thoughtful.
          </h3>
          <h3 className="content-tool-text fw-medium mb-0">
            Not another 
            <span className="highlight highlighted yellow animating">
              <p className="animate__hidden grad-color1" data-animate="animate__fadeIn">content tool.</p>
            </span>
            <br />
            Not another 
            <span className="highlight2 highlighted2 yellow animating">
              <p className="animate__hidden grad-color2" data-animate="animate__fadeIn">social feed.</p>
            </span>
          </h3>
          <h3 className="content-tool-text fw-light text-muted mb-5">
            Something more intentional,<br />and <span className="text-dark underline scroll-animate">truly creator-first.</span>
          </h3>
        </div>
        
        {/* Bottom-left arrow SVG */}
        <Image 
          src="/arrow 1.svg" 
          alt="Curved Arrow" 
          width={80} 
          height={80}
          className="decor-arrow-bottom animate__hidden animate__delay-1s animate__duration-2s" 
          data-animate="animate__bounceIn"
        />
        
        {/* Site Link */}
        <p className="fw-medium mt-4 tribli-ai pt-md-5">tribli.ai</p>
      </div>
    </section>
  );
}