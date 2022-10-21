const express = require("express");
const router = express.Router();
const User = require("../model/model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Follow = require('../model/followModel')


// Create user
router.post("/createUser", async (req, res) => {
  const token = generateAccessToken(req.body.email);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += characters[Math.floor(Math.random() * characters.length)];
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    username: req.body.username,
    date: req.body.date,
    code,
    token,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Follow user
router.post('/follow', async (req, res) => {
  try {
    const follow = new Follow({
      following: req.body.following,
      followers: req.body.followers
    })
    const newFollow = await follow.save()
    res.status(201).json(newFollow)
  } catch (e) {
    res.status(400).json({ message: err.message })
  }
})

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

//Update account status
router.post("/updateStatus", async (req, res) => {
  try {
    const getEmail = await User.updateOne(
      { email: req.body.email },
      { $set: { status: "active" } }
    );

    res.status(201).json({ getEmail });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Send create user email
router.post("/registerEmail", async (req, res) => {
  const { to } = req.body;
  const getEmail = await User.findOne({ email: to });
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
    html: `<p>Hi ${to}</p>
      <p>Confirm your email address to continue capturing and sharing your moments with the world</p>
      <p style="font-size:2rem;font-weight:bold">${getEmail.code.toUpperCase()}</p>
    `,
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

// Get user login
router.post("/getUserLogin", async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    await jwt.verify(
      user.token,
      process.env.NEXT_PUBLIC_TOKEN,
      async (err, token) => {
        if (err) {
          const token = generateAccessToken(req.body.email);
          await User.updateOne(
            { email: req.body.email },
            { $set: { token: token } }
          );
          user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
          });
        }
      }
    );

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Check user

router.post("/checkUser", async (req, res) => {
  try {
    let user = await User.findOne({
      token: req.body.token,
    });
    await jwt.verify(
      user.token,
      process.env.NEXT_PUBLIC_TOKEN,
      async (err, token) => {
        if (err) {
          user = null;
        }
      }
    );

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Reset password email
router.post("/resetPassword", async (req, res) => {
  try {
    const { to } = req.body;
    const user = await User.findOne({ email: to });
    let token = user.token;
    await jwt.verify(
      user.token,
      process.env.NEXT_PUBLIC_TOKEN,
      async (err, res) => {
        if (err) {
          const newtoken = generateAccessToken(to);
          await User.updateOne({ email: to }, { $set: { token: newtoken } });
          token = newtoken;
        }
      }
    );
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
      subject: `${user.username}, este simplu sa te reconectezi`,
      html: `<p>Salut ${user.username},</p>
        <p>Ne pare rau sa aflam ca intampini probleme la conectare. Am primit un mesaj pentru a ne anunta ca ai uitat parola. Daca este vorba de tine poti reseta parola acum.</p>
        <div style="marginBottom:1rem;height:50px">
        <a style="text-decoration:none;color:white;background:#0095f6;border-radius:4px;margin-right:5px;padding:0.5rem 1rem" href=http://localhost:3000/login>Conecteaza-te ca dfgff</a>
        <a style="text-decoration:none;color:white;background:#0095f6;border-radius:4px;;padding:0.5rem 1rem" href=http://localhost:3000/resetPassword?token=${token}>Reseteaza parola</a>
        </div>
        `,
    };
    transporter.sendMail(mailOptions, (err, result) => {
      if (err) {
        res.json("Opps error occured");
      } else {
        res.json("thanks for e-mailing me");
      }
    });
    res.status(201).json({ ...user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/changePassword", async (req, res) => {
  try {
    await User.updateOne(
      { token: req.body.token },
      { $set: { password: req.body.password } }
    );
    res.status(201).json({});
  } catch (e) {
    res.status(400).json({ message: err.message });
  }
});

//Check if email exists

router.post("/checkEmail", async (req, res) => {
  const { email } = req.body;
  try {
    const getUser = await User.findOne({ email });
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
