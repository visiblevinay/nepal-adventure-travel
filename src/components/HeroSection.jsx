import React from "react";
import "./HeroSection.css";
import mountainImg from "../assets/mountain.jpeg";
import heroVideo from "../assets/hero.mp4";

function HeroSection() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${mountainImg})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__container">
        <div className="hero__left" data-aos="fade-right">
          <h1 className="hero__title">Nepal Adventure Travels & Tourism</h1>

          <p className="hero__tagline">
            Planning a spiritual trip or an exciting Himalayan adventure?
            <br />
            We're here to make your Nepal journey unforgettable — with smooth transport,
            cozy stays, and expert local support!
          </p>

          <div className="hero__contact">
            <p>📧 <strong>Email:</strong> arifrxl02@gmail.com</p>
            <p>📞 <strong>India:</strong> +91-9955462402</p>
            <p>📞 <strong>Nepal:</strong> +977-9828970156</p>
          </div>
        </div>

        <div className="hero__right" data-aos="fade-left">
          <video
            src={heroVideo}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
