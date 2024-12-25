import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHandsHelping, FaAward, FaUsers } from 'react-icons/fa';
import aboutImage from '../images/login/login.jpg'; // Example image
import '../CSS/about.css';

function AboutPage() {
  return (
    <Container fluid className="about-page">
      <Row className="hero-section">
        <Col md={6} className="hero-text">
          <h1>Welcome to Our Store</h1>
          <p>
            Discover the best products, carefully selected just for you. Our mission is to
            provide quality products at unbeatable prices.
          </p>
          <Button variant="primary" size="lg" href="/" className="btn-shop-now" >
            Shop Now
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={aboutImage}
            alt="About Us"
            className="hero-image"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Col>
      </Row>

      <Row className="about-details">
        <Col md={12} className="text-center">
          <h2>Our Story</h2>
          <p>
            We are a passionate team of e-commerce enthusiasts dedicated to bringing you high-quality
            products that enrich your life. With years of experience in the industry, we prioritize customer
            satisfaction, timely delivery, and unbeatable prices.
          </p>
        </Col>
      </Row>

      <Row className="about-features">
        <Col md={3} className="feature-box">
          <FaShoppingCart size={60} className="feature-icon" />
          <h4>Wide Selection</h4>
          <p>Explore a wide variety of products across multiple categories to suit your needs.</p>
        </Col>
        <Col md={3} className="feature-box">
          <FaAward size={60} className="feature-icon" />
          <h4>Quality Products</h4>
          <p>We ensure that every product we sell meets high-quality standards for your satisfaction.</p>
        </Col>
        <Col md={3} className="feature-box">
          <FaHandsHelping size={60} className="feature-icon" />
          <h4>Customer Support</h4>
          <p>Our dedicated customer service team is here to assist you whenever you need help.</p>
        </Col>
        <Col md={3} className="feature-box">
          <FaUsers size={60} className="feature-icon" />
          <h4>Trusted by Thousands</h4>
          <p>Join our community of loyal customers who trust us for their shopping needs.</p>
        </Col>
      </Row>

      <Row className="team-section">
        <Col md={12} className="text-center">
          <h2>Meet Our Team</h2>
          <p>
            Behind every great store is a great team! Get to know the passionate people who bring you the best products and services.
          </p>
        </Col>
      </Row>

      <Row className="team-cards">
        <Col md={4} className="team-card">
          
          <h5>John Doe</h5>
          <p>Founder & CEO</p>
        </Col>
        <Col md={4} className="team-card">
         
          <h5>Jane Smith</h5>
          <p>Marketing Director</p>
        </Col>
        <Col md={4} className="team-card">
         
          <h5>Emily Brown</h5>
          <p>Customer Support Lead</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
