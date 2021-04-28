const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  f_name: {
    type: String,
  },
  l_name: {
    type: String,
  },
  company: {
    type: String,
  },
  job_title: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  notes: {
    type: String,
  },
});

//Phone set as string for ease of validator library
module.exports = user = mongoose.model("users", userSchema);