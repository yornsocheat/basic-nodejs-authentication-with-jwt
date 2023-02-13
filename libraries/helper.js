const fs = require("fs");
const bcrypt = require("bcrypt");
const saltRounds = 8;

exports.countFileInDir = (path) => {
	fs.readdir(path, (err, files) => {
		if (err) throw err;
		console.log(files.length);
	});
};

exports.hashSync = (plainText) => {
	return bcrypt.hashSync(plainText, saltRounds);
};

exports.compareHashSync = (plainText, hash) => {
	return bcrypt.compareSync(plainText, hash);
};

exports.currentTimestamp = () => {
	let d = new Date();
	let yyyy = d.getUTCFullYear();
	let mm = d.getUTCMonth();
	let dd = d.getUTCDate();
	const hour = d.getUTCHours();
	const minute = d.getUTCMinutes();
	const second = d.getUTCSeconds();

	return `${yyyy}-${mm}-${dd} ${hour}:${minute}:${second}`;
};
