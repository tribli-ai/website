'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Optional: allow re-triggering on scroll again
          entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.2
    });

    if (footerRef.current) {
      const animatedSections = footerRef.current.querySelectorAll(".bottom_animation");
      animatedSections.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-light text-muted" ref={footerRef}>
      {/* Middle Flex Row */}
      <div className="container">
        <div className="d-flex pt-3 flex-column flex-md-row justify-content-between align-items-center text-center text-md-center gap-3">
          {/* Left: Logo */}
          <div className="d-flex align-items-center gap-2">
            <Image src="/Vector.png" width={24} height={24} alt="Logo" />
            <span className="fw-semibold">tribli.ai</span>
          </div>
          
          {/* Center: Status */}
          <div className="d-flex align-items-center gap-2 justify-content-center">
            <Image src="/Ninja Head.png" width={24} height={24} alt="Ninja Head" />
            <small>Currently in Stealth Mode</small>
          </div>
          
          {/* Right: Copyright */}
          <div className="d-flex align-items-center gap-2 justify-content-center">
            <small>© 2025 Tribli. All rights reserved.</small>
          </div>
        </div>
        
        {/* Bottom Red TRIBLI Logo */}
        <div className="text-center pt-5 mt-5">
          <Image 
            src="/Layer_1.svg" 
            alt="TRIBLI Logo Animation" 
            width={1200} 
            height={200}
            className="img-fluid bottom_animation" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </footer>
  );
}