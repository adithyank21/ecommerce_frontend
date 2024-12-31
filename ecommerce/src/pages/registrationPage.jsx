


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful actions
import axios from 'axios'; // For making API requests
import '../CSS/form.css'; // Assuming the same CSS file

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: '',
  });
  const [step, setStep] = useState('register'); // Tracks the registration step ('register' or 'verify')
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // For navigation after success

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/register', {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      setSuccessMessage(response.data.message);
      setStep('verify'); // Move to OTP verification step
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/verifyEmail', {
        code: formData.otp, // Sending the OTP code for verification
      });
      setSuccessMessage(response.data.message);
      alert('Registration successful');
      navigate('/login'); // Redirect to login page after success
    } catch (err) {
      setError(err.response?.data?.message || 'Error during OTP verification');
    }
  };

  const handleResendOtp = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/resend-otp', {
        email: formData.email,
      });
      setSuccessMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Error resending OTP');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">
          {step === 'register' ? 'Create Your Account' : 'Verify Your OTP'}
        </h2>
        {step === 'register' && (
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="register-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="register-input"
            />
            <button type="submit" className="register-button">
              Register
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
        {step === 'verify' && (
          <form onSubmit={handleVerifyOtp} className="register-form">
            <input
              type="text"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              required
              className="register-input"
            />
            <button type="submit" className="register-button">
              Verify OTP
            </button>
            <br/>
            <br/>
            <button
              type="button"
              className="register-button resend-button"
              onClick={handleResendOtp}
            >
              Resend OTP
            </button>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        )}
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;