'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      id="scrollToTop" 
      className="scroll-top-btn" 
      onClick={scrollToTop}
      style={{ display: showButton ? 'flex' : 'none' }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}