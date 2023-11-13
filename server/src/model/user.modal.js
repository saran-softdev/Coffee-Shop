const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  googleId: String,
  userProfile: String,
  email: String,
  password: String,
  phoneNumber: String,
  orderData: [
    {
      orderId: Number,
      productName: String,
      price: Number,
      quantity: Number
    },
    { timestamps: true }
  ]
});

const userDataModel = mongoose.model("user-data", userSchema);

module.exports = userDataModel;
