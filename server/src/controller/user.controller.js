const router = require("express").Router();
const userDataModel = require("../model/user.modal");
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

/* User Manipulation */

router.get("/user-get", (req, res) => {
  userDataModel
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching user data" });
    });
});

router.post("/user-post", (req, res) => {
  const userData = req.body;
  userDataModel
    .create(userData)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error creating a new user" });
    });
});

router.put("/user-update/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  userDataModel
    .findByIdAndUpdate(userId, updatedData, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error updating user data" });
    });
});

router.delete("/user-delete/:id", (req, res) => {
  const userId = req.params.id;
  userDataModel
    .findByIdAndRemove(userId)
    .then(() => {
      res.json({ message: "User deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting user" });
    });
});

/* Order Manipulation */

router.get("/user-get-order", (req, res) => {
  // Add your logic to fetch order data here
  userDataModel
    .findOrderData()
    .then((orderData) => {
      res.json(orderData);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching order data" });
    });
});

router.post("/user-post-order", (req, res) => {
  const orderData = req.body;
  // Add your logic to create a new order here
  userDataModel
    .createOrderData(orderData)
    .then((newOrder) => {
      res.json(newOrder);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error creating a new order" });
    });
});

router.put("/user-update-order/:id", (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;
  // Add your logic to update the order here
  userDataModel
    .updateOrderData(orderId, updatedOrder)
    .then((updatedOrder) => {
      res.json(updatedOrder);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error updating order data" });
    });
});

router.delete("/user-delete-order/:id", (req, res) => {
  const orderId = req.params.id;
  // Add your logic to delete the order here
  userDataModel
    .deleteOrderData(orderId)
    .then(() => {
      res.json({ message: "Order deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting order" });
    });
});

/* Google Login */
// --------------------Login----------------------------//

router.get("/login/success", (req, res) => {
  if (req.user) {
    // console.log(req.user)
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
    }
    res.redirect(CLIENT_URL);
  });
});

//  --- google  --

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

module.exports = router;
