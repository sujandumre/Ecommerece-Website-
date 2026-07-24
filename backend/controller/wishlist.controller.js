const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");

// ===========================================
// Add Product to Wishlist
// ===========================================
const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    // Check Product
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check Already Exists
    const exists = await Wishlist.findOne({
      user: req.user.id,
      product: productId,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: req.user.id,
      product: productId,
    });

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===========================================
// Get Logged-in User Wishlist
// ===========================================
const getWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.find({
      user: req.user.id,
    })
      .populate("product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===========================================
// Remove Product From Wishlist
// ===========================================
const removeFromWishlist = async (req, res) => {

  try {

    const productId = req.params.productId;

    const wishlist = await Wishlist.findOneAndDelete({
      user: req.user.id,
      product: productId,
    });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Product not found in wishlist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===========================================
// Clear Wishlist
// ===========================================
const clearWishlist = async (req, res) => {

  try {

    await Wishlist.deleteMany({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Wishlist cleared successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  clearWishlist,
};