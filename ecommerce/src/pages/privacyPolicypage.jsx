import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa';
import privacyImage from '../images/login/login.jpg'; // Example image
import '../CSS/privacy.css';

function PrivacyPolicyPage() {
  return (
    <Container fluid className="privacy-policy-page">
      <Row className="hero-section">
        <Col md={6} className="hero-text">
          <h1>Privacy & Policy</h1>
          <p>Your privacy is important to us. Here’s how we protect your data and ensure your security.</p>
        </Col>
        <Col md={6}>
          <img
            src={privacyImage}
            alt="Privacy and Policy"
            className="hero-image"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Col>
      </Row>

      <Row className="policy-section">
        <Col md={12} className="text-center">
          <h2>Our Privacy Commitment</h2>
          <p>We are committed to ensuring the privacy and security of our customers. Here's how we protect your personal information.</p>
        </Col>
      </Row>

      <Row className="policy-details">
        <Col md={4} className="policy-item">
          <FaShieldAlt size={50} className="policy-icon" />
          <h4>Data Protection</h4>
          <p>We use state-of-the-art encryption techniques to keep your personal information safe.</p>
        </Col>
        <Col md={4} className="policy-item">
          <FaLock size={50} className="policy-icon" />
          <h4>Secure Payments</h4>
          <p>Your transactions are secured with the highest industry standards for payment security.</p>
        </Col>
        <Col md={4} className="policy-item">
          <FaUserSecret size={50} className="policy-icon" />
          <h4>Confidentiality</h4>
          <p>We never share your personal details with third parties without your consent.</p>
        </Col>
      </Row>

      <Row className="policy-content">
        <Col md={12}>
          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information such as your name, email, address, and payment details only when you make a purchase or register for an account.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            Your information is used to process orders, improve our services, and send you promotional offers that may interest you. We may also use your data for internal analytics.
          </p>

          <h3>3. Data Retention</h3>
          <p>
            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
          </p>

          <h3>4. Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal information at any time. You can also withdraw your consent for us to process your data by contacting us directly.
          </p>

          <h3>5. Cookies</h3>
          <p>
            Our website uses cookies to enhance your experience. These cookies allow us to remember your preferences and provide personalized content.
          </p>

          <h3>6. Third-Party Services</h3>
          <p>
            We may share your information with trusted third-party partners for payment processing and customer service. These parties are obligated to protect your data according to our privacy standards.
          </p>

          <h3>7. Security Measures</h3>
          <p>
            We implement a variety of security measures to ensure your personal information is protected. These include SSL encryption, secure payment gateways, and regular security audits.
          </p>

          <h3>8. Changes to Privacy Policy</h3>
          <p>
            We reserve the right to update our privacy policy at any time. Any changes will be reflected on this page, and we will notify users of significant updates.
          </p>
        </Col>
      </Row>

      {/* <Row className="contact-section">
        <Col md={12} className="text-center">
          <h2>Have Questions?</h2>
          <p>If you have any questions regarding our privacy policy, feel free to contact us.</p>
          <button className="btn-contact">Contact Us</button>
        </Col>
      </Row> */}
    </Container>
  );
}

export default PrivacyPolicyPage;
