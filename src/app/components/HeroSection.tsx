'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const [logoAnimated, setLogoAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useScrollAnimation(sectionRef);

  useEffect(() => {
    // Trigger logo animation on mount
    const timer = setTimeout(() => {
      setLogoAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    const element = document.getElementById('scroll-to-tribli');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={sectionRef}>
      <div className={`logo-container ${logoAnimated ? 'animate' : ''}`} id="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="954" height="251" viewBox="0 0 954 251" fill="none" className="hero-logo">
          <g clipPath="url(#clip0_40_992)">
            <path d="M417.648 250.567L370.894 172.921C412.389 152.828 417.518 119.628 417.648 93.5005C417.908 44.9443 374.682 0.454209 325.439 0.021637H215.783V250.589H280.763V189.467L303.252 187.434L342.063 250.654L417.627 250.589L417.648 250.567ZM280.763 63.8909H319.595C332.517 63.8909 352.993 63.8909 352.993 90.1913C352.993 116.492 318.989 128.669 278.425 128.669L280.806 129.048L280.763 63.8909Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
            <path d="M889.021 0H954V251H889.021V0Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
            <path d="M436.177 0H501.156V251H436.177V0Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
            <path d="M710.078 154.774C709.429 153.282 708.693 151.811 707.87 150.384C701.636 139.505 690.338 132.8 678.065 130.918C678.454 130.983 681.831 127.76 682.307 127.371C684.147 125.943 685.922 124.451 687.502 122.742C701.095 108.057 702.134 87.4661 702.134 68.8222C702.134 58.9163 699.061 49.2267 696.182 41.0078C693.195 32.4862 688.584 25.0459 682.48 18.9034C676.398 12.7825 668.692 8.02421 659.579 4.75829C650.791 1.60052 640.423 0 628.8 0H526.049V63.9991L555.119 111.604L526.049 111.474V251H637.674C650.207 251 661.354 249.399 670.835 246.22C680.597 242.954 688.866 238.239 695.424 232.161C702.069 226.019 707.113 218.535 710.381 209.906C713.541 201.579 715.143 192.365 715.143 182.524C715.143 173.224 713.866 163.426 710.057 154.753L710.078 154.774ZM627.696 63.9991C632.631 63.9991 636.181 65.6428 638.259 68.9088C640.25 72.0449 641.159 76.0678 641.159 81.6047C641.159 87.7256 640.185 92.2676 638.194 95.5119C636.159 98.8427 628.626 100.53 624.103 99.8377L602.262 63.9991H627.696ZM648.259 181.226C645.467 184.795 640.726 186.612 634.146 186.612H592.089V149.129H634.146C640.748 149.129 645.531 150.903 648.324 154.363C650.9 157.564 652.112 161.652 652.112 167.189C652.112 173.418 650.878 177.874 648.259 181.226Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
            <path d="M792.222 186.612V0H727.242V251H873.262V186.612H792.222Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
            <path d="M185.99 64.0207V0H0V64.0207H31.3209V137.882C31.3209 153.412 34.2647 168.011 40.1522 181.659C46.0398 195.306 54.1352 207.267 64.4168 217.562C74.6983 227.836 86.6682 235.925 100.326 241.808C113.985 247.691 128.595 250.632 144.137 250.632H192.904V186.612H144.137C137.383 186.612 131.02 185.314 125.067 182.718C119.093 180.123 113.92 176.641 109.526 172.25C105.132 167.86 101.669 162.712 99.1576 156.829C96.6468 150.946 95.3913 144.631 95.3913 137.882V64.0207H192.904Z"   
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              className="logo-path"
            />
          </g>
          <defs>
            <clipPath id="clip0_40_992">
              <rect width="954" height="251" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <h1 className="hero-heading animate__animated animate__zoomIn animate__delay-3s">COMING SOON</h1>
      </div>
      
      <div className="scroll-indicator animate__hidden" data-animate="animate__zoomIn" style={{ animationDelay: '2.4s' }}>
        <button onClick={handleScrollClick} className="bg-transparent border-0 cursor-pointer">
          <Image src="/Mouse Scrolling.png" alt="Scroll Icon" width={35} height={35} className="animate__hidden" data-animate="bounce" />
        </button>
        <p className="unfold-text">UNFOLD</p>
      </div>
    </section>
  );
}