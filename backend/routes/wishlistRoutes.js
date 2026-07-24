const express = require("express");
const router = express.Router();

const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  clearWishlist,
} = require("../controller/wishlist.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Add Product
router.post("/", authMiddleware, addToWishlist);

// Get Wishlist
router.get("/", authMiddleware, getWishlist);

// Remove Product
router.delete("/:productId", authMiddleware, removeFromWishlist);

// Clear Wishlist
router.delete("/", authMiddleware, clearWishlist);

module.exports = router;