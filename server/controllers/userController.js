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

    // cannot signup user
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
