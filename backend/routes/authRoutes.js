const express = require("express");
const { get } = require('mongoose');
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controller/auth.controller");


// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

module.exports = router;