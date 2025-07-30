'use client';

import Image from 'next/image';

export default function FollowSection() {
  return (
    <section className="follow-section position-relative">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-around text-center text-md-start">
        {/* Left Side: Arrows + Text */}
        <div className="position-relative mb-4 mb-md-0">
          {/* Top Arrow */}
          <Image src="/right-up.svg" alt="arrow" width={24} height={24} className="arrow-top" />
          
          {/* Main Text Image */}
          <Image src="/unfolds.svg" alt="Follow the story as it unfolds" width={200} height={100} className="img-fluid" />
          
          {/* Bottom Arrow */}
          <Image src="/arrow 1.svg" alt="arrow" width={24} height={24} className="img-fluid arrow-bottom mt-3" />
        </div>
        
        {/* Right Side: Social Icons */}
        <div className="d-flex gap-3 justify-content-center">
          {/* LinkedIn */}
          <a href="#" target="_blank" className="icon-wrapper">
            <Image src="/LinkedIn.svg" width={90} height={90} className="social-icon default" alt="LinkedIn" />
            <Image src="/linkedin-svg-icon-hover.svg" width={90} height={90} className="social-icon hover-img" alt="LinkedIn" />
          </a>
          
          {/* Instagram */}
          <a href="#" target="_blank" className="icon-wrapper">
            <Image src="/Instagram.svg" width={90} height={90} className="social-icon default" alt="Instagram" />
            <Image src="/instagram-svg-hover.svg" width={90} height={90} className="social-icon hover-img" alt="Instagram" />
          </a>
          
          {/* X/Twitter */}
          <a href="#" target="_blank" className="icon-wrapper">
            <Image src="/X.svg" width={90} height={90} className="social-icon default" alt="X" />
            <Image src="/twitter-svg-idle.svg" width={90} height={90} className="social-icon hover-img" alt="X" />
          </a>
        </div>
      </div>
    </section>
  );
}