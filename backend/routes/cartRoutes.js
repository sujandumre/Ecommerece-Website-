const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../controller/cart.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Cart Route Working",
  });
});

router.post("/", authMiddleware, addToCart);

router.get("/", authMiddleware, getCart);

router.put("/:id", authMiddleware, updateCart);

router.delete("/:id", authMiddleware, removeFromCart);

router.delete("/clear/all", authMiddleware, clearCart);

module.exports = router;