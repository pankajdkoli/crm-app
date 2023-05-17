const mongoose = require("mongoose");
const express = require("express");
const app = express();

const mongoURI = "mongodb://localhost:27017/crm";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("connect to db succefully");
  } catch (err) {
    console.error(err);
  }
}
connectToMongo();

module.exports = connectToMongo;
