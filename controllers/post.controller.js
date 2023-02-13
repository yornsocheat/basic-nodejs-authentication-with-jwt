const Post = require("../models/Post");

exports.gets = async (req, res, next) => {
	try {
		const [posts, _] = await Post.findAll();

		res.status(200).json({
			posts,
		});
	} catch (error) {
		next(error);
	}
};

exports.create = async (req, res, next) => {
	try {
		const { title, body } = req.body;
		let post = new Post(title, body);
		await post.save();

		res.status(201).json({
			message: "Create successful",
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.get = async (req, res, next) => {
	try {
		const { id } = req.params;
		const [post, _] = await Post.findById(id);

		if (post.length > 0) {
			return res.status(200).json({
				post: post[0],
			});
		}

		res.status(404).json({
			message: "No post found or has been deleted",
		});
	} catch (error) {
		next(error);
	}
};

exports.delete = async (req, res, next) => {
	try {
		const { id } = req.params;
		const [post, _] = await Post.deleteById(id);

		if (post && post.affectedRows > 0) {
			return res.status(200).json({
				message: "Delete successful",
			});
		}

		res.status(404).json({
			message: "Cannot delete the post, which is not exists",
		});
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, body } = req.body;
		const [post, _] = await Post.updateById(id, title, body);

		if (post && post.affectedRows > 0) {
			return res.status(200).json({
				message: "Updated successful",
			});
		}

		res.status(422).json({
			message: "Cannot update the post, which is not exists",
		});
	} catch (error) {
		next(error);
	}
};
