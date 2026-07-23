const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // Product Name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Product Description
    description: {
      type: String,
      required: true,
    },

    // Product Category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // Brand
    brand: {
      type: String,
      required: true,
    },

    // Price
    price: {
      type: Number,
      required: true,
    },

    // Discount Price
    discountPrice: {
      type: Number,
      default: 0,
    },

    // Quantity Available
    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    // Product Images
    images: [
      {
        type: String,
      },
    ],

    // Average Rating
    rating: {
      type: Number,
      default: 0,
    },

    // Number of Reviews
    numReviews: {
      type: Number,
      default: 0,
    },

    // Featured Product
    isFeatured: {
      type: Boolean,
      default: false,
    },

    // Best Seller
    isBestSeller: {
      type: Boolean,
      default: false,
    },

    // Active Status
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);