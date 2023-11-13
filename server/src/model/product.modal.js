const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: String,
    productId: String,
    productImage: String,
    productPrice: String,
    profileUrl: String,
    stock: Number
  },
  { timestamps: true }
);

const productDataModel = mongoose.model("product-data", productSchema);

module.exports = productDataModel;

