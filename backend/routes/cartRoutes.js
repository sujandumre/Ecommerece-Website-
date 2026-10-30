
const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
} = require("../controller/cart.controller.js");

const authMiddleware = require("../middleware/authMiddleware.js");

router.get("/", authMiddleware, getCart);
router.post("/", authMiddleware, addToCart);
router.put("/:productId", authMiddleware, updateCart);
router.delete("/:productId", authMiddleware, removeFromCart);

module.exports = router;
