const mongoose = require("mongoose");
const { Schema } = mongoose;

// this schema for the auth.js
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;