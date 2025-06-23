import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__brand glow">Nepal Adventure Travels</h3>
          <p>Karbala Road, Laxmipur, Raxaul</p>
          <p>All Nepal Travel Services</p>
        </div>

        <div className="footer__section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:arifrxl02@gmail.com">arifrxl02@gmail.com</a>
          </p>
          <p>
            <a href="tel:+919955462402">+91-9955462402</a>
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Nepal Adventure Travels | Designed by Vinay ✨
      </div>
    </footer>
  );
}

export default Footer;
