const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passportSetup = require("./passport");
const passport = require("passport");
require("dotenv").config();
const path = require("path");
/* Don't Remove Import db connection */
const mongoose = require("./src/config/db");
// import controller
const userController = require("./src/controller/user.controller");
const productController = require("./src/controller/product.controller");
const loginController = require("./src/controller/login.controller");
// cors origin
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true
  })
);
app.use(bodyParser.json());

// Configure Express session
app.use(
  session({
    secret: "codevskills",
    resave: false,
    saveUninitialized: false
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use("/", userController);
app.use("/auth", userController);
app.use("/", productController);
app.use("/", loginController);
app.listen(PORT, () => {
  console.log(`Server listening at the PORT: ${PORT}`);
});
