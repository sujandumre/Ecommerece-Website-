
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