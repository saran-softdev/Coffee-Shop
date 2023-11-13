const router = require("express").Router();
const loginDataModal = require("../model/login.modal");

// Post Register
router.post("/api/signup", async (req, res) => {
  const postData = req.body;
  console.log(postData);
  const post_data = new loginDataModal({
    userName: postData.userName,
    password: postData.password,
    email: postData.email
  });

  await post_data.save();
  res.send("Data posted ");
});

// Post Login
router.post("/api/signin", async (req, res) => {
  const { userName, password } = req.body;
  const user = await loginDataModal.findOne({ userName, password });
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  if (!password) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // User is authenticated at this point
  res.json({ message: "Authentication successful" });
});

module.exports = router;
