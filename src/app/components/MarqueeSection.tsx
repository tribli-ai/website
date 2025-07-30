'use client';

import Image from 'next/image';

export default function MarqueeSection() {
  const marqueeItems = [
    { text: "BUILT FOR THE BOLD" },
    { image: "/Vector.png" },
    { text: "Guided by purpose" },
    { image: "/Vector.png" },
    { text: "Different by design" },
    { image: "/Vector.png" },
    { text: "Shaped for the creators of tomorrow" },
    { image: "/Vector.png" }
  ];

  return (
    <>
      <div className="banner-red-border"></div>
      <div id="scroll-to-tribli">
        <section>
          <div className="marquee-wrapper">
            <div className="container-fluid p-0">
              <div className="marquee-block">
                <div className="marquee-scroll">
                  <div className="marquee-inner to-left">
                    {/* First set of marquee content */}
                    <div className="marquee-content d-flex">
                      {marqueeItems.map((item, index) => (
                        <div key={`first-${index}`} className="marquee-item">
                          {item.text ? (
                            <p>{item.text}</p>
                          ) : (
                            <p>
                              <Image 
                                src={item.image!} 
                                alt="Decorative icon" 
                                width={33} 
                                height={33} 
                                style={{ marginBottom: '6px' }} 
                              />
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Duplicate for seamless scroll */}
                    <div className="marquee-content d-flex">
                      {marqueeItems.map((item, index) => (
                        <div key={`second-${index}`} className="marquee-item">
                          {item.text ? (
                            <p>{item.text}</p>
                          ) : (
                            <p>
                              <Image 
                                src={item.image!} 
                                alt="Decorative icon" 
                                width={33} 
                                height={33} 
                                style={{ marginBottom: '6px' }} 
                              />
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}