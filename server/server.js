const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

const userRoute = require("./routes/userRoutes");

//models
const User = require("./models/userModel.js");

// create servers
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoute);

// connection middlewares

mongoose.connect(process.env.KEY).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  app.listen(process.env.PORT, () => {
    console.log("app active:", process.env.PORT);
  });

  console.log("connection active");
});

mongoose.connection.on("error", () => {
  console.log("error");
});
