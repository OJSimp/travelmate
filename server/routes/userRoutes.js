const express = require("express");
const router = express.Router();

// controller functions

const {
  loginUser,
  signupUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/userController");

// Log In route - login page
router.post("/login", loginUser);

// Sign up route - signup page
router.post("/signup", signupUser);

// Get all users
router.get("/", getAllUsers);

// Find a user with email
router.get("/:email", getOneUser);

module.exports = router;
