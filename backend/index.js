const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose.connect(
  "mongodb+srv://dev19:Calculator1.@instagram-clone.p3l9946.mongodb.net/instagram-clone"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const subscribersRouter = require("./routes/routes");

app.listen(3002, () => console.log("Server Started"));
app.use(cors(corsOptions));
app.use("/subscribers", subscribersRouter);
