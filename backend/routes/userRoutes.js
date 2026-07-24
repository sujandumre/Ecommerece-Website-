const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  changePassword,
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
} = require("../controller/user.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Logged-in User
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);

// Admin
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id/role", authMiddleware, updateUserRole);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;