const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userToken = (_id) => {
  // sending the user _id exlusively as a payload to user cookie data
  return jwt.sign({ _id }, process.env.TOKEN, { expiresIn: "3d" });
};

// signup a new user

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = userToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    if (
      error.message === "This is an existing email." ||
      error.message === "Email is empty." ||
      error.message === "Email is invalid."
    ) {
      res.status(400).json({ emailError: error.message });
    } else if (error.message === "Password is empty") {
      res.status(400).json({ passwordError: error.message });
    }
  }
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = userToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    if (
      error.message === "This is an incorect email." ||
      error.message === "Email is empty."
    ) {
      res.status(400).json({ emailError: error.message });
    } else if (
      error.message === "Password is empty." ||
      error.message === "Incorrect Password."
    ) {
      res.status(400).json({ passwordError: error.message });
    }
  }
};

// Get all users

const getAllUsers = async (req, res) => {
  try {
    // Use the User model to query your database for all users
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get one user

const getOneUser = async (req, res) => {
  try {
    const email = req.params.email;

    // Use the User model to find a user by email
    const user = await User.findOne({ email });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error finding user by email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { loginUser, signupUser, getAllUsers, getOneUser };
