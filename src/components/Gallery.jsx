import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollAmount = 320;
  const totalImages = 45;

  // 🔁 Generate duplicated images for infinite illusion
  const baseImages = Array.from({ length: totalImages }, (_, i) => ({
    src: `/gallery/img${i + 1}.jpeg`,
    alt: `Travel moment ${i + 1}`,
  }));

  const images = [...baseImages, ...baseImages]; // double for looping effect

  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  // 🌀 Infinite auto-scroll
  useEffect(() => {
    if (!isAutoScrolling) return;

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const interval = setInterval(() => {
      if (!scrollElement) return;

      scrollElement.scrollLeft += 1;

      // 🔁 Reset to start when nearing end of scroll (invisible to user)
      if (
        scrollElement.scrollLeft >=
        scrollElement.scrollWidth / 2
      ) {
        scrollElement.scrollLeft = 0;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">
          <span role="img" aria-label="camera" className="gallery-icon">
            📸
          </span>
          Travel Moments
        </h2>
        <p className="gallery-subtitle">Capturing memories from around the world</p>
      </div>

      <div className="gallery-wrapper">
        <button
          className="scroll-btn scroll-btn-left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="gallery-scroll"
          ref={scrollRef}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {images.map((image, i) => (
            <div key={i} className="gallery-item">
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="gallery-img"
                onClick={() => window.open(image.src, "_blank")}
              />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">View Full Size</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="scroll-btn scroll-btn-right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="gallery-controls">
        <button
          className={`auto-scroll-toggle ${isAutoScrolling ? "active" : ""}`}
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
        >
          {isAutoScrolling ? "Pause Auto-scroll" : "Resume Auto-scroll"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
