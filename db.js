const mongoose = require("mongoose");
const express = require("express");
const app = express();

const mongoURI = "mongodb://127.0.0.1:27017/crm-app";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
module.exports = connectToMongo;
