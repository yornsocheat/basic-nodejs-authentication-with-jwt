const { check, validationResult } = require("express-validator");

exports.loginValidator = [
	check("email").exists().withMessage("Email is required"),
	check("password").exists().withMessage("Password is required"),
];
