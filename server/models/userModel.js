const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

// USER - schema

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

// sign up user method // signup() // not an arrow function

userSchema.statics.signup = async function (email, password) {
  // email validation // using validator package returns boolean
  if (!validator.isEmail(email)) {
    throw Error("Email is invalid ");
  }

  if (!email && password) {
    throw Error("Email is empty");
  }

  if (email && !password) {
    throw Error("Password is empty");
  }

  // no email or password
  if (!email || !password) {
    throw Error("Email & Password Empty");
  }

  // password strength // using validator package returns boolean

  // check the user against the database
  const existingEmail = await this.findOne({ email });
  // if the email exists throw error
  if (existingEmail) {
    throw Error("This is an existing email");
  }

  // password encryption // salt is an special encryption key on the end of the password encryption
  const salt = await bcrypt.genSalt(10);
  // hash is the pasword plus the salt on the end
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
