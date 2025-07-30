'use client';

import { RefObject, useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TribliHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useScrollAnimation(sectionRef as RefObject<HTMLElement>);



  return (
    <section className="tribli-hero py-5" ref={sectionRef}>
      <div className="hero-container">
        {/* Phone Content */}
        <div className="phone-content animate__hidden" data-animate="animate__slideInUp">
          <div className="phone-inner-content">
            <Image 
              src="/Vector_2.svg" 
              alt="Phone" 
              width={200} 
              height={100}
              style={{ marginBottom: '50px', paddingTop: '30px' }}
            />
            <h4 className="mobile-text-quit text-dark" style={{ paddingBottom: '30px', fontSize: '20px', textAlign: '-webkit-match-parent', lineHeight: '20px', fontWeight: 600, margin: 'auto 24px' }}>
              A Quiet Revolution for Global Creators
            </h4>
            <p className="mobile-text-building text-dark" style={{ fontSize: '13px', color: '#6C6C6C', fontWeight: 500, lineHeight: '14px', paddingBottom: '0px' }}>
              We&apos;re building something that will empower creators in ways the world hasn&apos;t seen yet.
            </p>
            <p className="mobile-text-stay-curious text-dark" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '100%' }}>
              Stay Curious. Stay Close.
            </p>
          </div>
          
          <a href="#join-waitlist">
            <div className="d-flex justify-content-center">
              <button className="waitlist-btn btn btn-dark fw-semibold">
                <div className="position-relative gradient-border" id="box">
                  <p className="btn-text-color pt-0">Join the wait list</p>
                </div>
              </button>
            </div>
          </a>
          
          <Image src="/mobile_img.svg" alt="Phone" width={400} height={600} className="phone-img" />
          
          <div className="phone-overlay">
            <Image 
              src="/prod-logo-bg.svg" 
              alt="T Logo" 
              width={954} 
              height={251} 
              className="logo-icon animate__hidden" 
              data-animate="animate__zoomIn" 
            />
          </div>
        </div>
        
        <div className="launch-info py-md-5 mb-md-5">
          <div className="container text-center py-3">
            <p className="lead mb-4 creators-text animate__hidden animate__delay-1s" data-animate="animate__zoomIn">
              Creators don&apos;t need more noise.<br />
              They need clarity, connection, and control.<br />
              That&apos;s exactly what we&apos;re creating behind closed doors.
            </p>
            <h5 className="fw-bold mb-2 launching-soon-text pt-2">Launching Soon</h5>
            <div className="d-flex justify-content-center flex-wrap mb-3">
              <p className="d-flex align-items-center px-1 py-2">
                <Image src="/googleplay.svg" alt="Google Play" width={163} height={47} className="img-fluid google-pay-style" />
              </p>
              <p className="d-flex align-items-center px-1 py-2">
                <Image src="/appstore.svg" alt="App Store" width={163} height={47} className="img-fluid appstore-style" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}