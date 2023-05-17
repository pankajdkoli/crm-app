const express = require("express");
const router = express.Router();

const User = require("../models/User");

//user table end-point
router.get("/getuser", async (req, res) => {
  const user = await User.find().sort("name");
  res.send(user);
});

//registration end-poin
router.post("/register", async (req, res) => {
  //if there are errors return bad request and errors

  try {
    // Check if the email already exists
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already registered" });
    } else {
      // Create a new user
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
      return res.send(user);
    }
    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// login end-point
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});
module.exports = router;
