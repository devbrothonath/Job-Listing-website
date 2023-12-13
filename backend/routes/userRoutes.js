const { Router } = require("express");

// controller functions
const { loginUser, registerUser } = require("../controllers/userController");

const router = Router();

// register post
router.post("/register", registerUser);

// login post
router.post("/login", loginUser);

module.exports = router;