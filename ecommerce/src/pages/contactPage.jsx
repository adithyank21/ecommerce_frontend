import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import contactImage from '../images/contact.jpg'; // Example image
import '../CSS/contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Your message has been sent!');
  };

  return (
    <Container fluid className="contact-page">
      <Row className="hero-section">
        <Col md={6} className="hero-text">
          <h1>Get in Touch</h1>
          <p>
            We're here to help! If you have any questions or need assistance, feel free to reach out to us.
          </p>
        </Col>
        <Col md={6}>
          <img
            src={contactImage}
            alt="Contact Us"
            className="hero-image"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Col>
      </Row>

      <Row className="contact-details">
        <Col md={12} className="text-center">
          <h2>Contact Information</h2>
          <p>We would love to hear from you! Here’s how you can reach us:</p>
        </Col>
      </Row>

      <Row className="contact-info">
        <Col md={4} className="contact-item">
          <FaPhoneAlt size={50} className="contact-icon" />
          <h4>Phone</h4>
          <p>+1 234 567 890</p>
        </Col>
        <Col md={4} className="contact-item">
          <FaEnvelope size={50} className="contact-icon" />
          <h4>Email</h4>
          <p>support@store.com</p>
        </Col>
        <Col md={4} className="contact-item">
          <FaMapMarkerAlt size={50} className="contact-icon" />
          <h4>Address</h4>
          <p>123 E-commerce St, City, Country</p>
        </Col>
      </Row>

      <Row className="contact-form">
        <Col md={12} className="text-center">
          <h2>Send Us a Message</h2>
          <p>If you have any questions, send us a message and we will get back to you as soon as possible.</p>
        </Col>
        <Col md={6} className="offset-md-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-send-message">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="social-media">
        <Col md={12} className="text-center">
          <h2>Follow Us</h2>
          <p>Stay connected with us on social media for updates and promotions!</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook size={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={40} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter size={40} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
