const express = require("express");
const router = express.Router();
const User = require("../model/model");
const jwt = require("jsonwebtoken");

// Create user
router.post("/createUser", async (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });
  const token = generateAccessToken(req.body.name);
  try {
    const newUser = await user.save();
    res.status(201).json({ ...user, ...token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Login user
router.post("/loginUser", async (req, res) => {
  try {
    const getUser = await User.findOne({ name: req.body.name });

    if (req.body.password !== getUser.password) {
      throw Error("Password doesn't match");
    }
    res.status(201).json(getUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

function generateAccessToken(user) {
  return jwt.sign({ user }, process.env.NEXT_PUBLIC_TOKEN, {
    expiresIn: "30d",
  });
}

module.exports = router;
