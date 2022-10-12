const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "active"],
  },
  code: {
    type: String,
  },
  date: {
    type: String,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("users", subscriberSchema);
