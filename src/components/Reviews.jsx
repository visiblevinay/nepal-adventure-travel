import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Ravi Sharma",
    date: "June 2025",
    rating: 5,
    comment: "An unforgettable journey! The Kathmandu, Pokhara & Chitwan tour was beautifully organized. Highly recommended.",
    photo: "https://cdn-icons-png.freepik.com/256/6997/6997484.png?ga=GA1.1.100897357.1727642025&semt=ais_hybrid",
  },
  {
    name: "Priya Menon",
    date: "May 2025",
    rating: 4,
    comment: "Excellent service and punctuality. The guides were knowledgeable and the car service was top‑notch.",
    photo: "https://cdn-icons-png.freepik.com/256/6997/6997666.png?ga=GA1.1.100897357.1727642025&semt=ais_hybrid",
  },
  {
    name: "Ankit Verma",
    date: "April 2025",
    rating: 5,
    comment: "Amazing! We loved the Muktinath pilgrimage—well‑planned and spiritually uplifting.",
    photo: "https://cdn-icons-png.freepik.com/256/11195/11195292.png?ga=GA1.1.100897357.1727642025&semt=ais_hybrid",
  },
];

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews__heading">What Our Customers Say</h2>
      <div className="reviews__grid">
        {reviews.map((review, index) => (
          <div className="review__card" key={index}>
            <img src={review.photo} alt={review.name} className="review__photo" />
            <div className="review__stars">{"⭐".repeat(review.rating)}</div>
            <p className="review__comment">“{review.comment}”</p>
            <div className="review__footer">
              <strong>{review.name}</strong> • <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://maps.app.goo.gl/JhXZYZ6fzk4gpteeA?g_st=aw"
        target="_blank"
        rel="noopener noreferrer"
        className="review__button"
      >
        See All Reviews on Google
      </a>
    </section>
  );
}

export default Reviews;
