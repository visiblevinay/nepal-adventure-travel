import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <h3>Nepal Adventure Travels</h3>
          <p>Karbala Road, Laxmipur, Raxaul</p>
          <p>All Nepal Travel Services</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: arifrxl02@gmail.com</p>
          <p>Phone: +91-9955462402</p>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Nepal Adventure Travels | Designed by Vinay ✨
      </div>
    </footer>
  );
}

export default Footer;
