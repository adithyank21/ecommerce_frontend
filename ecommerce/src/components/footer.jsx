import React from 'react';
import '../CSS/footer.css'; // Import the custom footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content text-center">
        <p>© 2024 Shop-Here E-Commerce. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
