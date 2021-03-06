const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  organizer: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("User", user);
