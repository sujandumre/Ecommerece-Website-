import React, { useState } from "react";
import { loginUser } from "../services/authServices";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const navigate = useNavigate();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const data = await loginUser(email, password);

//   console.log(data);
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", response.data.token);

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    alert("Login Successful");

    navigate("/");

  } catch (error) {

    alert(error.response?.data?.message || "Login Failed");

  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          {/* <img
            src="/logo.png"
            alt="ShopEase"
            className="mx-auto h-16 w-auto mb-4"
          /> */}

          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="mt-2 text-gray-300">
            Login to your ShopEase account
          </p>

        </div>

        {/* Login Card */}

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}

            <div>

              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg bg-white/10 border border-gray-500 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-indigo-400"
              />

            </div>

            {/* Password */}

            <div>

              <div className="flex justify-between mb-2">

                <label className="text-sm font-medium text-gray-200">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-300 hover:text-indigo-200"
                >
                  Forgot Password?
                </Link>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg bg-white/10 border border-gray-500 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-indigo-400"
              />

            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition duration-300 text-white font-semibold py-3 rounded-lg"
            >
              Sign In
            </button>

          </form>

          {/* Register */}

          <p className="mt-8 text-center text-gray-300">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-indigo-300 hover:text-indigo-200"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;