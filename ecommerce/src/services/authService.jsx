// // // // const API_URL = 'http://localhost:5001/api/auth';

// // // // export const registerUser = async (userData) => {
// // // //   const response = await fetch(`${API_URL}/register`, {
// // // //     method: 'POST',
// // // //     headers: { 'Content-Type': 'application/json' },
// // // //     body: JSON.stringify(userData),
// // // //   });
// // // //   return response.json();
// // // // };

// // // // export const loginUser = async (userData) => {
// // // //   const response = await fetch(`${API_URL}/login`, {
// // // //     method: 'POST',
// // // //     headers: { 'Content-Type': 'application/json' },
// // // //     body: JSON.stringify(userData),
// // // //   });
// // // //   return response.json();
// // // // };


// const API_URL = 'http://localhost:5001/api/auth';

// export const registerUser = async (userData) => {
//   const response = await fetch(`${API_URL}/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const loginUser = async (userData) => {
//   const response = await fetch(`${API_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };



// // import axios from "axios";

// // export const loginUser = async (formData) => {
// //   try {
// //     const response = await axios.post("http://localhost:5001/api/auth/login", formData);
// //     return response.data;
// //   } catch (error) {
// //     return error.response ? error.response.data : { message: "Network error" };
// //   }
// // };

// // export const registerUser = async (formData) => {
// //   try {
// //     const response = await axios.post("http://localhost:5001/api/auth/register", formData);
// //     return response.data;
// //   } catch (error) {
// //     return error.response ? error.response.data : { message: "Network error" };
// //   }
// // };


import axios from "axios";

export const loginUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:5001/api/auth/login", formData);
    return response.data; // Returns { token, user }
  } catch (error) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message }; // Handle error from the server
    }
    return { message: "An unexpected error occurred" }; // Handle unexpected errors
  }

  
};


export const registerUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:5001/api/auth/register", formData);
    return response.data; // Returns { token, user }
  } catch (error) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message }; // Handle error from the server
    }
    return { message: "An unexpected error occurred" }; // Handle unexpected errors
  }

  
};
