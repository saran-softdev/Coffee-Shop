const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
    email: String
  },
  { timestamps: true }
);

const loginDataModal = mongoose.model("login-user-data", loginSchema);
module.exports = loginDataModal;


// adTitle: "",
//               description: "",
//               price: "",
//               country: "",
//               state: "",
//               city: "",
//               nearby: "",
//               phoneNumber: "",