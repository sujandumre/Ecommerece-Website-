import React, { useState } from "react";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";
import axios from "axios";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(null);

  const handleTrackOrder = async (e) => {
    e.preventDefault();

    try {
      // Backend Integration
      // const response = await axios.get(
      //   `http://localhost:5000/api/orders/track/${orderId}?email=${email}`
      // );
      // setOrder(response.data);

      // Demo Data
      setOrder({
        orderId,
        customer: "Sujan Dumre",
        product: "Apple iPhone 15 Pro Max",
        quantity: 1,
        total: "$999",
        status: "Shipped",
        payment: "Paid",
        estimatedDelivery: "July 28, 2026",
      });

    } catch (error) {
      alert("Order not found.");
    }
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-12 px-6">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Track Your Order
            </h1>

            <p className="text-gray-500 mt-2">
              Enter your Order ID and Email Address.
            </p>
          </div>

          {/* Track Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">

            <form
              onSubmit={handleTrackOrder}
              className="space-y-5"
            >

              <div>
                <label className="block font-medium mb-2">
                  Order ID
                </label>

                <input
                  type="text"
                  placeholder="Enter Order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Track Order
              </button>

            </form>

          </div>

          {/* Order Details */}
          {order && (
            <div className="bg-white mt-10 shadow-lg rounded-xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Order Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <p>
                    <strong>Order ID:</strong> {order.orderId}
                  </p>

                  <p className="mt-2">
                    <strong>Customer:</strong> {order.customer}
                  </p>

                  <p className="mt-2">
                    <strong>Product:</strong> {order.product}
                  </p>

                  <p className="mt-2">
                    <strong>Quantity:</strong> {order.quantity}
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Total:</strong> {order.total}
                  </p>

                  <p className="mt-2">
                    <strong>Payment:</strong> {order.payment}
                  </p>

                  <p className="mt-2">
                    <strong>Status:</strong>

                    <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {order.status}
                    </span>
                  </p>

                  <p className="mt-2">
                    <strong>Estimated Delivery:</strong>{" "}
                    {order.estimatedDelivery}
                  </p>

                </div>

              </div>

              {/* Progress Bar */}

              <div className="mt-10">

                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Ordered</span>
                  <span>Packed</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-3/4 rounded-full"></div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default TrackOrder;