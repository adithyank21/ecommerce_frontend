// // import React, { useState } from 'react';
// // import { registerUser } from '../services/authService';
// // function Register() {
// //   const [formData, setFormData] = useState({ username: '', phoneOrEmail: '', password: '' });
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const response = await registerUser(formData);
// //       if (response.message === 'User registered successfully') {
// //         alert('Registration successful');
// //       } else {
// //         setError(response.message || 'Registration failed');
// //       }
// //     } catch {
// //       setError('Error connecting to the server');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={formData.username}
// //           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
// //           required
// //         />
// //         <input
// //           type="text"
// //           placeholder="Phone or Email"
// //           value={formData.phoneOrEmail}
// //           onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //           required
// //         />
// //         <button type="submit">Register</button>
// //         {error && <p>{error}</p>}
// //       </form>
// //     </div>
// //   );
// // }

// // export default Register;
 

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation after registration
// import '../CSS/form.css'; // Use the same CSS file for both login and registration

// function Register() {
//   const [formData, setFormData] = useState({ username: '', phoneOrEmail: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // For navigation to login page after success

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await registerUser(formData);
//       if (response.message === 'User registered successfully') {
//         alert('Registration successful');
//         navigate('/login'); // Redirect to login page after successful registration
//       } else {
//         setError(response.message || 'Registration failed');
//       }
//     } catch {
//       setError('Error connecting to the server');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2 className="register-title">Create Your Account</h2>
//         <form onSubmit={handleSubmit} className="register-form">
//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             required
//             className="register-input"
//           />
//           <input
//             type="text"
//             placeholder="Phone or Email"
//             value={formData.phoneOrEmail}
//             onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
//             required
//             className="register-input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//             className="register-input"
//           />
//           <button type="submit" className="register-button">Register</button>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//         <p className="login-link">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful actions
import axios from 'axios'; // For making API requests
import '../CSS/form.css'; // Assuming the same CSS file

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
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
        name: formData.name,
        phoneOrEmail: formData.phoneOrEmail,
        password: formData.password,
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
      const response = await axios.post('http://localhost:5001/verify-otp', {
        phoneOrEmail: formData.phoneOrEmail,
        otp: formData.otp,
        name: formData.name,
        password: formData.password,
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
        phoneOrEmail: formData.phoneOrEmail,
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
              type="text"
              placeholder="Phone or Email"
              value={formData.phoneOrEmail}
              onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
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

