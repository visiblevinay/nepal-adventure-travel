import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    people: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappMessage = `New Booking Enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Destination: ${formData.destination}
People: ${formData.people}
Vehicle: ${formData.vehicle}
Message: ${formData.message}`;

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Book / Enquire Now</h2>

      <form
        className="contact__form"
        action="https://formspree.io/f/mldnpdbn"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination / Place"
          required
          onChange={handleChange}
        />

        <input
          type="number"
          name="people"
          placeholder="No. of People"
          required
          onChange={handleChange}
        />

        <select
          name="vehicle"
          required
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>Select Vehicle</option>
          <option value="Bus">Bus</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Innova">Innova</option>
          <option value="Car">Car</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Email</button>
      </form>

      <a
        href={`https://wa.me/919955462402?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        className="whatsapp__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send on WhatsApp
      </a>
    </section>
  );
}

export default ContactForm;
