require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const subscribersRouter = require("./routes/routes");

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose.connect(process.env.NEXT_PUBLIC_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.listen(3002, () => console.log("Server Started"));
app.use(cors(corsOptions));
app.use("/", subscribersRouter);
