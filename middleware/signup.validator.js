const { check } = require("express-validator");

exports.signupValidator = [
	check("name")
		.isLength({ min: 3 })
		.withMessage("The name must have minimum length of 3")
		.trim(),
	check("phone")
		.isLength({ min: 9, max: 10 })
		.withMessage(
			"The phone number have minimum and maximum length between 9 to 10"
		)
		.trim(),
	check("email")
		.isEmail()
		.withMessage("Invalid email address")
		.normalizeEmail(),

	check("password")
		.isLength({ min: 8, max: 15 })
		.withMessage("Your password should have min and max length between 8-15")
		.matches(/\d/)
		.withMessage("Your password should have at least one number")
		.matches(/[!@#$%^&*(),.?":{}|<>]/)
		.withMessage("Your password should have at least one special character"),

	check("confirmPassword").custom((value, { req }) => {
		const { password, confirmPassword } = req.body;

		if (value !== password) {
			throw new Error("Confirm password does not match");
		}

		return true;
	}),
];
