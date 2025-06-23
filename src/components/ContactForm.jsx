import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `New Booking Enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Destination: ${formData.destination}
People: ${formData.people}
Vehicle: ${formData.vehicle}
From: ${fromDate ? fromDate.toLocaleDateString() : ""}
To: ${toDate ? toDate.toLocaleDateString() : ""}
Message: ${formData.message}`;

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Book / Enquire Now</h2>

      <form
        className="contact__form"
        action="https://formspree.io/f/mldnpdbn"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-grid">
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
            pattern="[0-9]{10}"
            title="10 digit mobile number"
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

          {/* Stylish Date Pickers */}
          <div className="date-picker-wrapper">
            <label>From:</label>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholderText="Select Start Date"
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>

          <div className="date-picker-wrapper">
            <label>To:</label>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              placeholderText="Select End Date"
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">📧 Send Email</button>
      </form>

      {submitted && (
        <p className="submit-success">✅ Thank you! We'll contact you shortly.</p>
      )}

      <a
        href={`https://wa.me/919955462402?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        className="whatsapp__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Send on WhatsApp
      </a>
    </section>
  );
}

export default ContactForm;
