const express = require("express");

const verifyToken = require('../middlewares/verifyToken')
const postRouter = express.Router();

postRouter.get('/', (req, res) => {
	res.json({
		message: 'Post list'
	});
});

postRouter.post('/', verifyToken, (req, res) => {
	console.log(req.user)
	res.json({
		message: 'Post created'
	});
});

module.exports = postRouter;
