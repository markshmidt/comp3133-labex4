const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },

  address: {
    street: String,
    suite: String,
    city: {
      type: String,
      required: true,
      match: /^[A-Za-z\s]+$/
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/
    },
    geo: {
      lat: String,
      lng: String
    }
  },

  phone: {
    type: String,
    required: true,
    match: /^\d-\d{3}-\d{3}-\d{4}$/
  },

  website: {
    type: String,
    required: true,
    match: /^(https?:\/\/)[^\s]+$/
  },

  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});

module.exports = mongoose.model("User", userSchema);
