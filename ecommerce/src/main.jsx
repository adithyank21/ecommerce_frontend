// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';


// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
//   <Router>
//   <App />
// </Router>,
// document.getElementById("root")
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap the app in Router */}
    <App />
  </Router>,
  document.getElementById("root")
);
