// // const express = require("express");
// // const { get } = require('mongoose');
// // const router = express.Router();

// // const {
// //   registerUser,
// //   loginUser,
// // } = require("../controller/auth.controller");


// // router.get("/", (req, res) => {
// //   res.json({
// //     message: "Auth API is working!"
// //   });
// // });


// // // Register
// // router.post("/register", registerUser);

// // // Login
// // router.post("/login", loginUser);

// // module.exports = router;



// // const express = require("express");
// // const router = express.Router();

// // console.log("Auth Routes Loaded");
// // router.post("/register", (req, res, next) => {
// //   console.log("Register route reached");
// //   next();
// // });

// // const {
// //   registerUser,
// //   loginUser,
// // } = require("../controller/auth.controller");



// // router.get("/", (req, res) => {
// //   res.json({
// //     message: "Auth Route Working"
// //   });
// // });

// // router.post("/register", (req, res) => {
// //   res.json({
// //     message: "Register Route Working"
// //   });
// // });

// // module.exports = router;




const express = require("express");
const router = express.Router();

console.log("authRoutes.js Loaded");

const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../controller/auth.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);

module.exports = router;
