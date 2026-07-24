import React, { useState } from "react";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-12 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Contact Us
            </h1>

            <p className="text-gray-500 mt-3">
              We'd love to hear from you. Send us your questions or feedback.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-2xl text-green-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      +977 98XXXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-red-500" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      support@shopease.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Google Map */}
              <div className="mt-10">

                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                  className="w-full h-72 rounded-xl border"
                  loading="lazy"
                ></iframe>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Contact;