import React from "react";
import "./Hotels.css";

const hotelsData = {
  Kathmandu: [
    "Hotel Royal Airport",
    "Khumbila Hotel",
    "Lapha Hotel Thamel",
    "Hotel Royal Kathmandu",
    "Hotel Tara Suit",
    "Pashupati Plaza",
  ],
  Pokhara: [
    "Hotel Gantbya Inn",
    "Hotel Murano",
    "Hotel Lake Paradise",
    "Hotel Himalayan Inn",
    "Hotel Lalupate",
    "Majheri Resort",
  ],
  Janakpur: [
    "Janki Star Hotel",
    "Hotel Ram Janki",
    "Red Crown Inn",
  ],
  Muktinath: [
    "Hotel Monalisa",
    "Marpha Hotel",
    "Hotel Grand Muktinath",
    "Himalayan Inn Jomsom",
  ],
  Chitwan: [
    "Jungle Safari Resort",
    "River Park Residency",
    "Nature Heritage",
  ],
  Lumbini: [
    "De Crown Inn",
    "Hotel Black & White",
  ],
};

function Hotels() {
  return (
    <section className="hotels" id="hotels">
      <h2 className="hotels__heading">🛏️ Hotels & Stay Options</h2>
      <div className="hotels__regions">
        {Object.entries(hotelsData).map(([region, hotels], index) => (
          <div
            className="region__card"
            key={region}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3>{region}</h3>
            <ul>
              {hotels.map((hotel, idx) => (
                <li key={idx}>🏨 {hotel}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hotels;
