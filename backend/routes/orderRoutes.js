const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controller/order.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Create Order
router.post("/", authMiddleware, createOrder);

// Get Logged-in User Orders
router.get("/my-orders", authMiddleware, getMyOrders);

// Get Single Order
router.get("/:id", authMiddleware, getOrderById);

// Get All Orders (Admin)
router.get("/", authMiddleware, getAllOrders);

// Update Order Status
router.put("/:id", authMiddleware, updateOrderStatus);

// Delete Order
router.delete("/:id", authMiddleware, deleteOrder);

module.exports = router;