const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  f_name: {
    type: String,
    required: true,
  },
  l_name: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  job_title: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});

module.exports = user = mongoose.model("users", userSchema);