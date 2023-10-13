const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

// USER - schema

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

// sign up user method // signup()

userSchema.statics.signup = async function (email, password) {
  // Email verification
  const existingEmail = await this.findOne({ email });
  if (existingEmail) {
    throw new Error("This is an existing email.");
  } else if (!email) {
    throw new Error("Email is empty");
  } else if (!validator.isEmail(email)) {
    throw new Error("Email is invalid.");
  }

  // Password verifcation
  if (email && !password) {
    throw new Error("Password is empty");
  }

  // Create user in database
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
  });

  return user;
};

// log in user method // login()

userSchema.statics.login = async function (email, password) {
  // validation
  // no email or password
  if (!email || !password) {
    throw Error("Email & Password Empty");
  }

  // check the user against the database
  const user = await this.findOne({ email });
  // if the email exists throw error
  if (!user) {
    throw Error("Incorrect email");
  }

  // using bcrypt to check if the password matches
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Passoword");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
