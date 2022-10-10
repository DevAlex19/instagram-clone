const express = require("express");
const router = express.Router();
const User = require("../model/model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Create user
router.post("/createUser", async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    username: req.body.username,
  });
  const token = generateAccessToken(req.body.email);

  try {
    const newUser = await user.save();
    res.status(201).json(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get user
router.post("/getUser", async (req, res) => {
  try {
    const getEmail = await User.findOne({ email: req.body.email });
    const getUsername = await User.findOne({ username: req.body.username });

    res.status(201).json({ getEmail, getUsername });
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

//Send create user email
router.post("/registerEmail", async (req, res) => {
  const { to } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to,
    subject: "Bine ai venit! Confirma adresa de e-mail",
  };
  transporter.sendMail(mailOptions, (err, result) => {
    if (err) {
      console.log(err);
      res.json("Opps error occured");
    } else {
      res.json("thanks for e-mailing me");
    }
  });
});

function generateAccessToken(user) {
  return jwt.sign({ user }, process.env.NEXT_PUBLIC_TOKEN, {
    expiresIn: "30d",
  });
}

module.exports = router;
