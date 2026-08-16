// import React from "react";
// import { FaTrash } from "react-icons/fa";


// import iphonebest from "../assets/iphonebest.png";

// function Cart() {
//   const cartItems = [
//     {
//       id: 1,
//       name: "iPhone 15 Pro Max",
//       price: 999,
//       quantity: 1,
//       image: iphone,
//     },
//     {
//       id: 2,
//       name: "Apple Watch Series 9",
//       price: 399,
//       quantity: 2,
//       image: iphone,
//     },
//   ];

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">

//       <h1 className="text-3xl font-bold mb-8">
//         Shopping Cart
//       </h1>

//       <div className="grid md:grid-cols-3 gap-8">

//         {/* Cart Items */}
//         <div className="md:col-span-2 space-y-6">

//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between"
//             >

//               <div className="flex items-center gap-5">

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-24 h-24 object-contain"
//                 />

//                 <div>

//                   <h2 className="font-semibold text-lg">
//                     {item.name}
//                   </h2>

//                   <p className="text-blue-600 font-bold mt-2">
//                     ${item.price}
//                   </p>

//                   <p className="text-gray-500">
//                     Quantity: {item.quantity}
//                   </p>

//                 </div>

//               </div>

//               <button>
//                 <FaTrash className="text-red-500 hover:text-red-700 text-xl" />
//               </button>

//             </div>
//           ))}

//         </div>

//         {/* Order Summary */}

//         <div className="bg-white rounded-xl shadow-md p-6 h-fit">

//           <h2 className="text-2xl font-semibold mb-4">
//             Order Summary
//           </h2>

//           <div className="flex justify-between mb-3">
//             <span>Total Items</span>
//             <span>{cartItems.length}</span>
//           </div>

//           <div className="flex justify-between mb-6">

//             <span>Total Price</span>

//             <span className="font-bold text-xl">
//               ${total}
//             </span>

//           </div>

//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">

//             Proceed to Checkout

//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Cart;


import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

// import {
//   getCart,
//   updateCart,
//   removeFromCart
// } from "../services/cartService";

import {
  getCart,
  updateCart,
  removeFromCart
} from "../services/cartServices.js";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCartItems(data.items || []);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const data = await removeFromCart(productId);

      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleQuantityChange = async (productId, quantity) => {
    try {
      const data = await updateCart(productId, quantity);

      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="md:col-span-2 space-y-6">

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-xl font-semibold">
                Your cart is empty
              </h2>

              <p className="text-gray-500 mt-2">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />

                  <div>

                    <h2 className="font-semibold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-blue-600 font-bold mt-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity - 1
                          )
                        }
                        className="border rounded p-2"
                      >
                        <FaMinus />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity + 1
                          )
                        }
                        className="border rounded p-2"
                      >
                        <FaPlus />
                      </button>

                    </div>

                  </div>

                </div>

                <button
                  onClick={() =>
                    handleRemove(item.productId)
                  }
                >
                  <FaTrash className="text-red-500 hover:text-red-700 text-xl" />
                </button>

              </div>
            ))
          )}

        </div>

        <div className="bg-white rounded-xl shadow-md p-6 h-fit">

          <h2 className="text-2xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>

            <span>
              {cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </span>
          </div>

          <div className="flex justify-between mb-6">

            <span>Total Price</span>

            <span className="font-bold text-xl">
              ${total.toFixed(2)}
            </span>

          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;