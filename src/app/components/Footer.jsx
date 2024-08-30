import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign-up for updates from metta muse</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-contact-currency">
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p>+44 221 133 5380</p>
            <p>customercare@mettamuse.com</p>
            <h5>Currency</h5>
            <p>USD</p>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h5>metta muse</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Artisans</a>
            </li>
            <li>
              <a href="#">Boutiques</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">EU Compliances Docs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="#">Orders & Shipping</a>
            </li>
            <li>
              <a href="#">Join/Login as Seller</a>
            </li>
            <li>
              <a href="#">Payment & Pricing</a>
            </li>
            <li>
              <a href="#">Return & Refunds</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="follow-us">
            <img src="./footerIcons/Insta.png" alt="insta-icon" />
            <img src="./footerIcons/linkedin.png" alt="linkedin-icon" />
          </div>
          <h5>metta muse ACCEPTS</h5>
          <div className="payment-methods">
            <img src="./footerIcons/gpay.png" alt="gpay-icon" />
            <img src="./footerIcons/ipay.png" alt="ipay-icon" />
            <img src="./footerIcons/opay.png" alt="opay-icon" />
            <img src="./footerIcons/amex.png" alt="amex-icon" />
            <img src="./footerIcons/paypal.png" alt="paypal-icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
