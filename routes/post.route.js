const express = require("express");

const verifyToken = require("../middleware/verifyToken");
const postController = require("../controllers/post.controller");

const router = express.Router();

router
	.route("/")
	.get(verifyToken, postController.gets)
	.post(verifyToken, postController.create);
router
	.route("/:id")
	.get(verifyToken, postController.get)
	.patch(verifyToken, postController.update)
	.delete(verifyToken, postController.delete);

module.exports = router;
