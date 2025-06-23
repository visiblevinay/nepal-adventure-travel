import React from "react";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919955462402"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
