// const Cart = require("../models/Cart");


// // Add Product To Cart
// const addToCart = async (req, res) => {
//   try {

//     const { productId, quantity } = req.body;

//     const userId = req.user.id;

//     const existingCart = await Cart.findOne({
//       user: userId,
//       product: productId,
//     });

//     if (existingCart) {
//       existingCart.quantity += quantity || 1;

//       await existingCart.save();

//       return res.status(200).json({
//         success: true,
//         message: "Cart Updated",
//         cart: existingCart,
//       });
//     }

//     const cart = await Cart.create({
//       user: userId,
//       product: productId,
//       quantity: quantity || 1,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product Added To Cart",
//       cart,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Get User Cart

// const getCart = async (req, res) => {

//   try {

//     const cart = await Cart.find({
//       user: req.user.id,
//     }).populate("product");

//     res.status(200).json({
//       success: true,
//       cart,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }

// };



// // Update Quantity

// const updateCart = async (req, res) => {

//   try {

//     const { quantity } = req.body;

//     const cart = await Cart.findById(req.params.id);

//     if (!cart) {

//       return res.status(404).json({
//         success: false,
//         message: "Cart Item Not Found",
//       });

//     }

//     cart.quantity = quantity;

//     await cart.save();

//     res.status(200).json({
//       success: true,
//       message: "Cart Updated",
//       cart,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }

// };



// // Remove Item

// const removeFromCart = async (req, res) => {

//   try {

//     const cart = await Cart.findById(req.params.id);

//     if (!cart) {

//       return res.status(404).json({
//         success: false,
//         message: "Item Not Found",
//       });

//     }

//     await cart.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Item Removed",
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }

// };



// // Clear Cart

// const clearCart = async (req, res) => {

//   try {

//     await Cart.deleteMany({
//       user: req.user.id,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Cart Cleared",
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }

// };

// module.exports = {
//   addToCart,
//   getCart,
//   updateCart,
//   removeFromCart,
//   clearCart,
// };

// controllers/cart.controller.js

import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: []
      });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }

      cart.items.push({
        productId,
        quantity,
        price: product.price,
        name: product.name,
        image: product.image
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({
        items: []
      });
    }

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found"
      });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      message: "Product removed from cart",
      cart
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found"
      });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart"
      });
    }

    if (quantity <= 0) {
      cart.items = cart.items.filter(
        (item) => item.productId.toString() !== productId
      );
    } else {
      item.quantity = quantity;
    }

    await cart.save();

    res.status(200).json({
      message: "Cart updated",
      cart
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};