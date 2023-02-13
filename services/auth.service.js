const jwt = require("jsonwebtoken");

exports.jwtSignToken = (user) => {
	const payload = {
		sub: user?.id,
		name: user?.name,
	};

	// jwt sign and res token
	return jwt.sign({ payload }, process.env.TOKEN_SECRET, {
		expiresIn: process.env.TOKEN_EXPIRES_IN,
	});
};
