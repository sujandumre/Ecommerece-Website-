// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const connectDB = require("./config/db");




// dotenv.config();

// const app = express();

// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));




// // Routes
// app.get("/", (req, res) => {
//   res.json({
    
//     message: "Server is running successfully ",
//   });
// });


// // app.use("/auth", authRoutes);
// // app.use("/auth", (req, res, next) => {
// //   console.log("Auth route reached");
// //   next();
// // });

// app.post("/test", (req, res) => {
//   res.json({
//     message: "POST is working"
//   });
// });

// app.use("/auth/register", (req, res, next) => {
//   console.log("➡️ Request reached /auth");
//   next();
// });

// app.post("/auth/register", (req, res) => {
//   res.json({
//     success: true,
//     message: "Register route works!",
//   });
// });

// app.use("/auth", (req, res, next) => {
//   console.log("Method:", req.method);
//   console.log("Original URL:", req.originalUrl);
//   console.log("Path:", req.path);
//   next();
// });
// app.use("/auth", authRoutes);


// app.use("/api/auth", authRoutes);
// app.use("/api/cart", cartRoutes);

// // Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running successfully",
  });
});

// Routes
app.use("/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/categories", categoryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});