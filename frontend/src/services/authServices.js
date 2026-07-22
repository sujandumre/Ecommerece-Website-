// export const loginUser = async (email, password) => {
//   const response = await fetch("http://localhost:5000/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   return response.json();
// };

import axios from "axios";

const API = "http://localhost:5000/auth";

// Register
export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/register`, userData);
  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await axios.post(`${API}/login`, userData);
  return response.data;
};

// Get All Users
export const getAllUsers = async () => {
  const response = await axios.get(`${API}/users`);
  return response.data;
};