const express = require("express");
const router = express.Router();

const {
  cashOnDelivery,
  createPayment,
  verifyPayment,
  getMyPayments,
  getPaymentById,
  getAllPayments,
} = require("../controller/payment.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Create Online Payment
router.post("/", authMiddleware, createPayment);

// Cash On Delivery
router.post("/cod", authMiddleware, cashOnDelivery);

// Verify Payment
router.post("/verify", authMiddleware, verifyPayment);

// Get My Payments
router.get("/my-payments", authMiddleware, getMyPayments);

// Get All Payments
router.get("/", authMiddleware, getAllPayments);

// Get Payment By ID
router.get("/:id", authMiddleware, getPaymentById);

module.exports = router;