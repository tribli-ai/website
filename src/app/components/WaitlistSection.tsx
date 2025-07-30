'use client';

import { useState } from 'react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
    
    // Show thank you message
    setShowThankYou(true);
  };

  return (
    <section className="waitlist-section bg-light" id="join-waitlist">
      <div className="container text-center" id="waitlist-container">
        {!showThankYou ? (
          /* Content to hide on submit */
          <div id="waitlist-content">
            <h2 className="text-dark join-text pb-2">Get Ready</h2>
            <p className="text-muted mb-4 mb-md-5 starts-quietly-text">
              Not for what's next. But for what's never been.
            </p>
            
            {/* Waitlist form */}
            <form 
              id="waitlist-form" 
              className="d-flex justify-content-center flex-wrap" 
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                className="form-control rounded-pill px-4 py-2" 
                placeholder="Your e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <div className="rainbow-wrapper position-relative">
                <div className="rainbow-glow"></div>
                <button 
                  type="submit" 
                  className="btn btn-dark rounded-pill px-3 py-2 waitlist-btn fw-semibold position-relative z-1"
                >
                  <div className="position-relative gradient-border" id="box">
                    <p className="btn-text-color pt-0">Get Early Access</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Thank You Message */
          <div id="thank-you-message" className="mt-4 py-3">
            <h3 className="btn-text-color mb-0 content-tool-text">Thank you! 🎉</h3>
            <p className="text-muted pt-2">You've been added to the waitlist.</p>
          </div>
        )}
      </div>
    </section>
  );
}