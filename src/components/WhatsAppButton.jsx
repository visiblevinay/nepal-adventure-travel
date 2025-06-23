import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa"; // React Icon

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919955462402"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;
