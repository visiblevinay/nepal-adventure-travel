import React, { useState } from "react";
import "./Tours.css";

const tours = [
  {
    title: "Pokhara Adventure",
    description: "Phewa Lake Boating, Sarangkot Sunrise, Paragliding, World Peace Pagoda, Davis Falls, Gupteshwor Mahadev Gufa, Annapurna Region Trekking, Extreme Zip-lining, International Mountain Museum, Bungee Jumping",
    image: "https://images.pexels.com/photos/30927438/pexels-photo-30927438.jpeg",
  },
  {
    title: "Muktinath Yatra",
    description: "Muktinath Temple Visit, Jwala Mai Temple, Thorong-La Pass, Kagbeni Village, Shaligram Fossils, Dhumba Lake, Upper Mustang Safari, Yak Ride & Local Culture",
    image: "https://images.pexels.com/photos/20046906/pexels-photo-20046906.jpeg",
  },
  {
    title: "Chitwan Jungle Safari",
    description: "Chitwan National Park Safari, Elephant Bathing, Canoe Ride, Tharu Cultural Show, Jeep Safari, Bird Watching, Sunset by Rapti River",
    image: "https://images.pexels.com/photos/32162190/pexels-photo-32162190.jpeg",
  },
  {
    title: "Kathmandu City Tour",
    description: "Swayambhunath Stupa, Boudhanath, Pashupatinath, Durbar Squares, Garden of Dreams, Chandragiri Hills, Thamel Shopping",
    image: "https://images.pexels.com/photos/31942059/pexels-photo-31942059.jpeg",
  },
  {
    title: "Janakpur Dham Pilgrimage",
    description: "Ram Janaki Temple, Janak Mandir, Mithila Culture, Local Shopping & Food",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Janki_Mandir.JPG/330px-Janki_Mandir.JPG",
  },
  {
    title: "Lumbini - Birthplace of Buddha",
    description: "Sacred Garden, Maya Devi Temple, Peace Pagoda, Monastic Zone, Bodhi Tree, Museum Visit",
    image: "https://www.buddhisttourism.online/assets/images/lumbini-banner4.webp",
  },
];

function Tours() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="tours" id="tours" data-aos="fade-up">
      <h2 className="tours__heading">Adventure Tour Packages</h2>
      <div className="tours__grid">
        {tours.map((tour, index) => (
          <div
            className="tour__card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={tour.image} alt={tour.title} className="tour__image" />
            <h3>{tour.title}</h3>
            <p className={`tour__desc ${expandedIndex === index ? "expanded" : ""}`}>
              {tour.description}
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleDescription(index)}
            >
              {expandedIndex === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tours;
