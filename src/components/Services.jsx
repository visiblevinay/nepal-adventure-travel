import React from "react";
import "./Services.css";

const services = [
  {
    title: "Car Rentals",
    description: "SUV, Scorpio, Traveller & more",
    icon: "https://cdn-icons-png.flaticon.com/128/11286/11286963.png",
  },
  {
    title: "Hotel Booking",
    description: "Best stays across Nepal",
    icon: "https://cdn-icons-png.flaticon.com/128/6030/6030437.png",
  },
  {
    title: "Adventure Tours",
    description: "Rafting, Paragliding, Bungy Jumping",
    icon: "https://cdn-icons-png.flaticon.com/128/1274/1274794.png",
  },
  {
    title: "Permits & Guides",
    description: "Muktinath, Safari & all local permits",
    icon: "https://cdn-icons-png.flaticon.com/128/16436/16436974.png",
  },
];

function Services() {
  return (
    <section className="services" id="services" data-aos="fade-up">
      <h2 className="services__heading">Our Services</h2>
      <div className="services__grid">
        {services.map((service, index) => (
          <div
            className="service__card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="service__icon"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
