const Payment = require("../models/Payment");
const Order = require("../models/Order");

// ==========================================
// Cash On Delivery Payment
// ==========================================
const cashOnDelivery = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const payment = await Payment.create({
      user: req.user.id,
      order: orderId,
      paymentMethod: "Cash On Delivery",
      amount: order.totalPrice,
      paymentStatus: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Cash On Delivery selected.",
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Create Online Payment
// ==========================================
const createPayment = async (req, res) => {

  try {

    const { orderId, paymentMethod } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const payment = await Payment.create({
      user: req.user.id,
      order: orderId,
      paymentMethod,
      amount: order.totalPrice,
      paymentStatus: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Payment initialized successfully.",
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ==========================================
// Verify Payment
// ==========================================
const verifyPayment = async (req, res) => {

  try {

    const { paymentId, transactionId } = req.body;

    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    payment.paymentStatus = "Completed";
    payment.transactionId = transactionId;

    await payment.save();

    await Order.findByIdAndUpdate(payment.order, {
      isPaid: true,
      paidAt: Date.now(),
      paymentStatus: "Completed",
    });

    res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ==========================================
// Get Logged-in User Payments
// ==========================================
const getMyPayments = async (req, res) => {

  try {

    const payments = await Payment.find({
      user: req.user.id,
    })
      .populate("order")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ==========================================
// Get Payment By ID
// ==========================================
const getPaymentById = async (req, res) => {

  try {

    const payment = await Payment.findById(req.params.id)
      .populate("order")
      .populate("user", "name email");

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ==========================================
// Get All Payments (Admin)
// ==========================================
const getAllPayments = async (req, res) => {

  try {

    const payments = await Payment.find()
      .populate("user", "name email")
      .populate("order")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  cashOnDelivery,
  createPayment,
  verifyPayment,
  getMyPayments,
  getPaymentById,
  getAllPayments,
};