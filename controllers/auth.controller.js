const { hashSync, compareHashSync } = require("../libraries/helper");
const User = require("../models/User");
const authService = require("../services/auth.service");

exports.signup = async (req, res, next) => {
	try {
		const { name, email, phone, password } = req.body;
		const passwordHash = hashSync(password);
		let user = new User(name, email, phone, passwordHash);
		user = await user.save();
		res.status(201).json({
			message: "User have been created",
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		let [user, _] = await User.findByEmail(email);
		user = user[0] || {};

		if (user && compareHashSync(password, user?.password)) {
			const token = authService.jwtSignToken(user);
			res.status(200).json({
				message: "Login successful",
				token,
			});
		}
	} catch (error) {
		next(error);
	}
};

exports.getAllUsers = async (req, res, next) => {
	try {
		const [users, _] = User.findAll();

		res.status(200).json({
			message: "Get all users",
			user,
		});
	} catch (error) {
		next(error);
	}
};

exports.logout = async (req, res, next) => {};
