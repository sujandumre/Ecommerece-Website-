const Cart = require("../models/Cart");


// Add Product To Cart
const addToCart = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    const userId = req.user.id;

    const existingCart = await Cart.findOne({
      user: userId,
      product: productId,
    });

    if (existingCart) {
      existingCart.quantity += quantity || 1;

      await existingCart.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated",
        cart: existingCart,
      });
    }

    const cart = await Cart.create({
      user: userId,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get User Cart

const getCart = async (req, res) => {

  try {

    const cart = await Cart.find({
      user: req.user.id,
    }).populate("product");

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Update Quantity

const updateCart = async (req, res) => {

  try {

    const { quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {

      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });

    }

    cart.quantity = quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart Updated",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Remove Item

const removeFromCart = async (req, res) => {

  try {

    const cart = await Cart.findById(req.params.id);

    if (!cart) {

      return res.status(404).json({
        success: false,
        message: "Item Not Found",
      });

    }

    await cart.deleteOne();

    res.status(200).json({
      success: true,
      message: "Item Removed",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Clear Cart

const clearCart = async (req, res) => {

  try {

    await Cart.deleteMany({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Cart Cleared",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
};