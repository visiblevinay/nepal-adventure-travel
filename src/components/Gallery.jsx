import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const totalImages = 45;

const Gallery = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 300;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 25); // speed
    return () => clearInterval(interval);
  }, []);

  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    try {
      images.push(require(`../assets/gallery/img${i}.jpeg`));
    } catch (err) {
      console.error(`Image img${i}.jpeg not found`);
    }
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">📸 Travel Moments</h2>

      <div className="gallery-wrapper">
        <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
         <span> &#10094;</span>
        </button>

        <div className="gallery-scroll" ref={scrollRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              onClick={() => window.open(src, "_blank")}
            />
          ))}
        </div>

        <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
         <span> &#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
