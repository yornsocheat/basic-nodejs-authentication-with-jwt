const express = require("express");

const authController = require("../controllers/auth.controller");
const { validationResult } = require("../middleware/validator");
const { signupValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");

const router = express.Router();

router
	.route("/login")
	.post(loginValidator, validationResult, authController.login);
router
	.route("/signup")
	.post(signupValidator, validationResult, authController.signup);

module.exports = router;
